import * as html from "@lambdaurora/libhtml";
import { ModPathResolveParams } from "./host.ts";
import { HOSTS } from "./hosts.ts";
import Loader, { load_loaders, LoaderRegistry } from "./loader.ts";
import Requirement, { load_requirements } from "./requirement.ts";
import { VERSION_REGISTRY } from "./version/mod.ts";
import { Status } from "./status.ts";

export interface Icon {
	url: string;
	pixelated: boolean;
}

export interface Version {
	id: string;
	note: string;
}

export type PerLoaderVersions = { [key: string]: Version[] };

export interface ResolvedLoaderVersions {
	loader: Loader;
	versions: Version[];
}

export type VersionInput = number | { id: number | string; note?: string };

export interface Link {
	host: string;
	params?: ModPathResolveParams;
}

function new_version(version: VersionInput): Version {
	if (typeof version === "number") {
		return { id: `1.${version}`, note: "" };
	} else {
		if (typeof version.id === "number") version.id = `1.${version.id}`;
		if (!version.note) version.note = "";
		return version as Version;
	}
}

export interface RequirementsData {
	require: string[];
	provide: string[];
}

export default class Mod {
	public namespace: string = "";
	private _icon: Icon;
	public versions: PerLoaderVersions;
	public categories: string[];
	public links: Link[];
	private requirements: RequirementsData;
	private _status: Status | null = null;

	constructor(public name: string, public author: string, public description: string) {
		this._icon = { url: "", pixelated: false };
		this.versions = {};
		this.categories = [];
		this.links = [];
		this.requirements = {
			require: [],
			provide: [],
		};
	}

	public get status(): Status | null {
		return this._status;
	}

	public set_status(status: Status) {
		this._status = status;
		return this;
	}

	/**
	 * Sets the icon of this mod.
	 *
	 * @param icon the link to the icon for this mod
	 * @param pixelated `true` if the icon is pixelated, otherwise `false`
	 */
	icon(icon: string, pixelated: boolean = false): this {
		this._icon.url = icon;
		this._icon.pixelated = pixelated;
		return this;
	}

	/**
	 * Adds Minecraft versions this mod is compatible with.
	 */
	add_version(...versions: { loader: string[]; v: VersionInput[] }[]) {
		for (const version of versions) {
			for (const loader of version.loader) {
				let data = this.versions[loader];

				if (!data) {
					this.versions[loader] = data = [];
				}

				data.push(
					...(version.v.map((v) => {
						return new_version(v);
					})),
				);
			}
		}

		return this;
	}

	async import_versions_from_modrinth(modrinth_slug?: string) {
		if (!modrinth_slug) {
			modrinth_slug = this.name;
		}

		const versions_data = await fetch(`https://api.modrinth.com/v2/project/${modrinth_slug}/version`)
			.then((response) => response.json())
			.then((response) => {
				const per_loader = {} as { [key: string]: string[] };

				for (const mod_version of response) {
					for (const loader of mod_version.loaders) {
						let data = per_loader[loader];

						if (!data) {
							per_loader[loader] = data = [];
						}

						data.push(...mod_version.game_versions);
					}
				}

				return per_loader;
			});

		for (const loader of Object.keys(versions_data)) {
			let data = this.versions[loader];

			if (!data) {
				this.versions[loader] = data = [];
			}

			const versions_to_add = [...new Set(versions_data[loader])]
				.filter((version) => {
					return VERSION_REGISTRY.find_version_index(version) !== -1;
				})
				.sort()
				.map((version) => {
					return { id: version, note: "" };
				});

			for (const version_to_add of versions_to_add) {
				if (!data.find((version) => version.id === version_to_add.id)) {
					data.push(version_to_add);
				}
			}

			data.sort((a, b) => {
				const a_components = a.id.split(".").map((c) => parseInt(c));
				const b_components = b.id.split(".").map((c) => parseInt(c));

				if (a_components.length === 2) a_components.push(0);
				if (b_components.length === 2) b_components.push(0);

				if (a_components[0] === b_components[0]) {
					if (a_components[1] === b_components[1]) {
						if (a_components[2] < b_components[2]) return -1;
						else if (a_components[2] > b_components[2]) return 1;
						else return 0;
					} else if (a_components[1] < b_components[1]) return -1;
					else return 1;
				} else if (a_components[0] < b_components[0]) return -1;
				else return 1;
			});
		}
	}

	resolve_versions(loaders: LoaderRegistry) {
		const resolved: ResolvedLoaderVersions[] = [];

		for (const loader of Object.keys(this.versions)) {
			const found_loader = loaders.get_by_id(loader);

			if (!found_loader) {
				throw new Error(`Could not find loader ${loader} for mod ${this.name}.`);
			}

			const versions = this.versions[loader].map((version) => {
				return { id: typeof version.id === "number" ? `1.${version.id}` : version.id, note: version.note };
			});

			const candidate = resolved.find((existing) => existing.loader.id === found_loader.id);

			if (candidate) {
				// Merge both.
				candidate.versions.push(...versions);
				continue;
			}

			resolved.push({
				loader: loaders.get_by_id(loader)!,
				versions: versions,
			});
		}

		// Filter out Quilt as it's redundant.
		{
			const quilt_versions_index = resolved.findIndex((data) => data.loader.id === "quilt");
			const fabric_versions = resolved.find((data) => data.loader.id === "fabric");

			if (fabric_versions !== undefined && quilt_versions_index !== -1) {
				const quilt_versions = resolved[quilt_versions_index];

				if (!quilt_versions.versions.some((quilt_version) => !fabric_versions.versions.find((fabric_version) => quilt_version.id === fabric_version.id))) {
					resolved.splice(quilt_versions_index, 1);
				}
			}
		}

		return resolved.toSorted((a, b) => a.loader.id.localeCompare(b.loader.id));
	}

	add_category(...categories: string[]) {
		this.categories.push(...categories);

		return this;
	}

	add_link(...links: Link[]) {
		this.links.push(...links);

		return this;
	}

	resolve_links() {
		const resolved = [];
		const host_count: { [id: string]: number } = {};

		for (const link of this.links) {
			if (link.host in host_count) {
				host_count[link.host]++;
			} else {
				host_count[link.host] = 1;
			}

			for (const existing of HOSTS) {
				if (existing.id === link.host) {
					resolved.push({
						host: existing,
						url: existing.get_mod_url(this, link.params),
						loader: (link.params && link.params.modloader) ? link.params.modloader : "Fabric",
						should_display_loader: false,
					});
				}
			}
		}

		console.log(host_count);

		for (const link of resolved) {
			if (host_count[link.host.id] > 1) {
				link.should_display_loader = true;
			}
		}

		return resolved;
	}

	requires(requirement: string | string[]) {
		if (requirement instanceof Array) {
			this.requirements.require.push(...requirement);
		} else {
			this.requirements.require.push(requirement);
		}

		return this;
	}

	async resolve_requirements() {
		return await load_requirements().then((requirements) => {
			const resolved: Requirement[] = [];

			for (const existing of requirements) {
				for (const requirement of this.requirements.require) {
					if (existing.id === requirement) {
						resolved.push(existing);
					}
				}
			}

			return resolved;
		});
	}

	provides(requirement: string | string[]) {
		if (requirement instanceof Array) {
			this.requirements.provide.push(...requirement);
		} else {
			this.requirements.provide.push(requirement);
		}

		return this;
	}

	is_providing(requirement: Requirement | string) {
		if (requirement === this.namespace) {
			return true;
		}

		if (requirement instanceof Requirement) {
			for (const provide of this.requirements.provide) {
				if (provide === requirement.id) {
					return true;
				}
			}
		}

		return false;
	}

	/**
	 * @return {string[]} a prettified string of the Minecraft versions the mod is compatible with
	 */
	get_prettified_version() {
		if (Object.keys(this.versions).length === 0) {
			return [];
		}

		const prettified = [];

		for (const loader of Object.keys(this.versions)) {
			const versions = this.versions[loader].map((version) => {
				return { id: typeof version.id === "number" ? `1.${version.id}` : version.id, note: version.note };
			});
			const segmented = VERSION_REGISTRY.segment_versions(versions)
				.map((segment) => {
					const note = segment[0].note === "" ? "" : ` (${segment[0].note})`;
					if (segment.length === 1) return segment[0].id + note;
					else return segment[0].id + " -> " + segment[segment.length - 1].id + note;
				}).join(", ");

			prettified.push(`${loader}: ${segmented}`);
		}

		return prettified;
	}

	/**
	 * @return {html.Element} a prettified string of the Minecraft versions the mod is compatible with
	 */
	get_html_versions(loaders: LoaderRegistry) {
		const versions_ul = html.create_element("ul");

		if (Object.keys(this.versions).length === 0) {
			return versions_ul;
		}

		const versions = this.resolve_versions(loaders);

		function create_li(c: ResolvedLoaderVersions) {
			const li = html.create_element("li")
				.with_attr("style", "display: flex");
			versions_ul.append_child(li);

			const loaders_el = html.create_element("span").with_attr("class", "loaders");
			li.append_child(loaders_el);

			loaders_el.with_child(
				html.create_element("a")
					.with_attr("class", "loader")
					.with_attr("href", c.loader.website)
					.with_attr("style", "margin-left: 4px;")
					.with_child(c.loader.get_fancy_icon())
					.with_child(new html.Text(c.loader.name)),
			);

			return li;
		}

		for (const loader_versions of versions) {
			const li = create_li(loader_versions);

			const mod_versions = VERSION_REGISTRY.segment_versions(loader_versions.versions)
				.map((segment) => {
					const note = segment[0].note === "" ? "" : ` (${segment[0].note})`;
					if (segment.length === 1) return segment[0].id + note;
					else return segment[0].id + " -> " + segment[segment.length - 1].id + note;
				}).join(", ");

			li.append_child(
				html.create_element("span")
					.with_child(new html.Text(`: ${mod_versions}`)),
			);
		}

		return versions_ul;
	}

	async to_html() {
		console.debug(`Building HTML of mod ${this.namespace}.`);

		const name_div = html.div({
			attributes: {
				class: "card_content",
			},
		});
		const versions_div = html.div({
			children: [html.b(["Versions"])],
			attributes: {
				class: ["card_content"],
			},
		});
		const card = html.div({
			children: [name_div, versions_div],
			attributes: {
				class: "card",
			},
		});

		if (this._icon) {
			const icon = html.img({
				attributes: {
					src: this._icon.url,
					alt: `${this.name}'s logo`,
				},
			});

			if (this._icon.pixelated) {
				icon.with_attr("class", "ls_pixelated");
			}

			name_div.append_child(icon);
		}

		name_div.append_child(this.to_name_html());

		const loaders = await load_loaders();
		versions_div.append_child(this.get_html_versions(loaders));

		await this.resolve_requirements().then((requirements) => {
			const div = html.create_element("div")
				.with_attr("class", ["card_content"])
				.with_child(
					html.create_element("b")
						.with_child(new html.Text("Requirements")),
				);

			const ul = html.create_element("ul");
			div.append_child(ul);

			for (const requirement of requirements) {
				ul.append_child(html.create_element("li").with_child(requirement.get_html_link()));
			}

			if (requirements.length !== 0) {
				card.append_child(div);
			}
		});

		const host_div = html.create_element("div")
			.with_attr("class", ["card_content"]);
		card.append_child(host_div);

		const links = this.resolve_links();

		for (const link of links) {
			const a = html.create_element("a")
				.with_attr("class", "mod_host")
				.with_attr("href", link.url)
				.with_attr("title", link.host.get_mod_tooltip(this) + ` (${link.loader})`);
			host_div.append_child(a);

			if (link.host.create_icon) {
				a.append_child(link.host.create_icon(42, 42));

				if (link.should_display_loader) {
					const loader = loaders.get_by_id(link.loader);

					if (loader) {
						const loader_icon = loader.get_fancy_icon();
						loader_icon.attr("class", "loader");
						a.append_child(loader_icon);
					}
				}
			} else {
				let text = link.host.name;

				if (link.should_display_loader) {
					text += ` (${link.loader})`;
				}

				a.append_child(text);
			}
		}

		return card;
	}

	private to_name_html() {
		const div = html.div();

		div.append_child(html.b([this.name]));

		if (this.status) {
			div.append_child(html.span({
				children: [this.status.content],
				attributes: {
					class: ["ls_chip", "status_chip"],
					ls_size: "small",
				},
				style: {
					"background-color": this.status.color + "44",
					"border-color": this.status.color,
				},
			}));
		}

		return div.with_child(html.br())
			.with_child(html.span(["by " + this.author]))
			.with_child(html.p([this.description]));
	}
}

const STATE = {
	mods: [] as Mod[],
	loaded: false,
};

export async function load_mods(): Promise<Mod[]> {
	if (!STATE.loaded) {
		const mods: string[] = [];

		for await (const dir_entry of Deno.readDir("./alternatives")) {
			if (dir_entry.isFile && dir_entry.name.endsWith(".ts")) {
				mods.push(dir_entry.name.substring(0, dir_entry.name.length - 3));
			}
		}

		STATE.mods = await Promise.all(mods.map(async (id) => {
			const mod = (await import(`../alternatives/${id}.ts`))["default"] as Mod;
			mod.namespace = id;
			return mod;
		}));

		STATE.loaded = true;
	}

	return STATE.mods;
}
