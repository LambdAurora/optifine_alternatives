import {html, md} from "@lib.md/mod.mjs";
import {load_hosts} from "./host.mjs";
import {load_loaders} from "./loader.ts";
import {load_requirements} from "./requirement.mjs";
import {get_versions, segment_versions} from "./version.ts";

function new_version(version) {
	if (typeof version === "number") {
		return {id: `1.${version}`, note: ""};
	} else {
		if (typeof version.id === "number") version.id = `1.${version.id}`;
		if (!version.note) version.note = "";
		return version;
	}
}

function array_equals(a, b) {
	return Array.isArray(a) &&
		Array.isArray(b) &&
		a.length === b.length &&
		a.every((val, index) => val === b[index]);
}

export default class Mod {
	constructor(name, author, description) {
		this.name = name;
		this.author = author;
		this.description = description;
		this._icon = {url: "", pixelated: false};
		this.versions = {};
		this.categories = [];
		this.links = [];
		this.requirements = {
			require: [],
			provide: []
		};
		this.special_handlings = [];
	}

	/**
	 * Sets the icon of this mod.
	 *
	 * @param {string} icon the link to the icon for this mod
	 * @param {boolean} pixelated `true` if the icon is pixelated, otherwise `false`
	 */
	icon(icon, pixelated = false) {
		this._icon.url = icon;
		this._icon.pixelated = pixelated;
		return this;
	}

	/**
	 * Adds Minecraft versions this mod is compatible with.
	 */
	add_version() {
		for (let i = 0; i < arguments.length; i++) {
			for (const loader of arguments[i].loader) {
				let data = this.versions[loader];

				if (!data) {
					this.versions[loader] = data = [];
				}

				data.push(...(arguments[i].v.map(v => {
					return new_version(v);
				})));
			}
		}

		return this;
	}

	async import_versions_from_modrinth(modrinth_slug) {
		if (!modrinth_slug) {
			modrinth_slug = this.name;
		}

		const versions_data = await fetch(`https://api.modrinth.com/v2/project/${modrinth_slug}/version`)
			.then(response => response.json())
			.then(response => {
				const per_loader = {};

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
				.filter(version => {
					const mc_version_data = get_versions().find(v => v.id === version);

					if (mc_version_data) {
						return mc_version_data.type === "release";
					} else {
						return false;
					}
				})
				.sort()
				.map(version => {
					return {id: version, note: ""};
				});

			for (const version_to_add of versions_to_add) {
				if (!data.find(version => version.id === version_to_add.id)) {
					data.push(version_to_add);
				}
			}

			data.sort((a, b) => {
				const a_components = a.id.split(".").map(c => parseInt(c));
				const b_components = b.id.split(".").map(c => parseInt(c));

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
			})
		}
	}

	async resolve_versions() {
		return load_loaders().then(loaders => {
			const resolved = [];

			for (const loader of Object.keys(this.versions)) {
				resolved.push({
					loader: loaders.get_by_id(loader),
					versions: this.versions[loader].map(version => {
						return {id: typeof version.id === "number" ? `1.${version.id}` : version.id, note: version.note};
					})
				})
			}

			return resolved;
		});
	}

	add_category() {
		for (let i = 0; i < arguments.length; i++) {
			if (arguments[i] instanceof Array) {
				this.categories.push(...arguments[i]);
			} else {
				this.categories.push(arguments[i]);
			}
		}

		return this;
	}

	add_link() {
		for (let i = 0; i < arguments.length; i++) {
			if (arguments[i] instanceof Array) {
				this.links.push(...arguments[i]);
			} else {
				this.links.push(arguments[i]);
			}
		}

		return this;
	}

	async resolve_links() {
		return load_hosts().then(hosts => {
			const resolved = [];

			for (const link of this.links) {
				for (const existing of hosts) {
					if (existing.id === link.host) {
						resolved.push({
							host: existing,
							url: existing.get_mod_url(this, link.params),
							loader: (link.params && link.params.modloader) ? link.params.modloader : "Fabric"
						});
					}
				}
			}

			return resolved;
		});
	}

	requires(requirement) {
		if (requirement instanceof Array) {
			this.requirements.require.push(...requirement);
		} else {
			this.requirements.require.push(requirement);
		}

		return this;
	}

	async resolve_requirements() {
		return load_requirements().then(requirements => {
			const resolved = [];

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

	provides(requirement) {
		if (requirement instanceof Array) {
			this.requirements.provide.push(...requirement);
		} else {
			this.requirements.provide.push(requirement);
		}

		return this;
	}

	is_providing(requirement) {
		if (requirement === this.namespace) {
			return true;
		}

		for (const provide of this.requirements.provide) {
			if (provide === requirement.id) {
				return true;
			}
		}

		return false;
	}

	add_special_handling(special_handlings) {
		this.special_handlings.push(special_handlings);
	}

	/**
	 * @return {string[]} a prettified string of the Minecraft versions the mod is compatible with
	 */
	get_prettified_version() {
		if (this.versions.length === 0)
			return [];

		let prettified = [];

		for (const loader of Object.keys(this.versions)) {
			const versions = this.versions[loader].map(version => {
				return {id: typeof version.id === "number" ? `1.${version.id}` : version.id, note: version.note};
			});
			const segmented = segment_versions(versions)
				.map(segment => {
					const note = segment[0].note === "" ? "" : ` (${segment[0].note})`;
					if (segment.length === 1) return segment[0].id + note;
					else return segment[0].id + " -> " + segment[segment.length - 1].id + note;
				}).join(", ");

			prettified.push(`${loader}: ${segmented}`);
		}

		return prettified;
	}

	async to_markdown() {
		const entry = new md.ListEntry();

		let name = new md.Text(this.name);

		const links = await this.resolve_links();
		if (links.length !== 0) {
			// Pick an URL.
			name = new md.Link(links[0].url, this.name, links[0].host.get_mod_tooltip(this), this.name);
		}

		const summary = new md.Paragraph(name);
		if (this.description !== null) {
			summary.push(` - ${this.description}  `);
		} else {
			summary.push(`  `);
		}

		const metadata_list = new md.List([new md.ListEntry(`Available for: ${this.get_prettified_version().join(",\ ")}  `)]);

		entry.push(summary)
			.push(metadata_list);

		return this.resolve_requirements().then(requirements => {
			const requirements_md = new md.Paragraph();

			for (const requirement of requirements) {
				requirements_md.push(`Requires `)
					.push(requirement.get_markdown_link())
					.push("  ");
			}

			if (requirements.length !== 0) {
				metadata_list.push(requirements_md);
			}

			return entry;
		});
	}

	/**
	 * @return {html.Element} a prettified string of the Minecraft versions the mod is compatible with
	 */
	async get_html_versions() {
		const versions_ul = html.create_element("ul");

		if (this.versions.length === 0)
			return versions_ul;

		const versions = await this.resolve_versions();

		function create_li(c) {
			const li = html.create_element("li")
				.with_attr("style", "display: flex");
			versions_ul.append_child(li);

			const loaders_el = html.create_element("span").with_attr("class", "loaders");
			li.append_child(loaders_el);

			loaders_el.with_child(html.create_element("a")
				.with_attr("class", "loader")
				.with_attr("href", c.loader.website)
				.with_attr("style", "margin-left: 4px;")
				.with_child(c.loader.get_fancy_icon(html))
				.with_child(new html.Text(c.loader.name)));

			return li;
		}

		for (const loader_versions of versions) {
			const li = create_li(loader_versions);

			let mod_versions = segment_versions(loader_versions.versions)
				.map(segment => {
					const note = segment[0].note === "" ? "" : ` (${segment[0].note})`;
					if (segment.length === 1) return segment[0].id + note;
					else return segment[0].id + " -> " + segment[segment.length - 1].id + note;
				}).join(", ");

			li.append_child(html.create_element("span")
				.with_child(new html.Text(`: ${mod_versions}`)));
		}

		return versions_ul;
	}

	async to_html() {
		const card = html.create_element("div")
			.with_attr("class", ["card"]);

		const name_div = html.create_element("div")
			.with_attr("class", ["card_content"]);

		card.append_child(name_div);

		if (this._icon) {
			const icon = html.create_element("img");
			icon.src(this._icon.url);
			icon.alt(this.name + "'s logo");

			if (this._icon.pixelated) {
				icon.with_attr("class", "ls_pixelated");
			}

			name_div.append_child(icon);
		}

		name_div.append_child(html.create_element("div")
			.with_child(html.create_element("b").with_child(new html.Text(this.name)))
			.with_child(html.create_element("br"))
			.with_child(html.create_element("span").with_child(new html.Text("by " + this.author)))
			.with_child(html.create_element("p").with_child(new html.Text(this.description)))
		);

		const versions_div = html.create_element("div")
			.with_attr("class", ["card_content"])
			.with_child(html.create_element("b")
				.with_child(new html.Text("Versions"))
			);
		card.append_child(versions_div);

		versions_div.append_child(await this.get_html_versions());

		await this.resolve_requirements().then(requirements => {
			const div = html.create_element("div")
				.with_attr("class", ["card_content"])
				.with_child(html.create_element("b")
					.with_child(new html.Text("Requirements"))
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

		const links = await this.resolve_links();

		for (const link of links) {
			const a = html.create_element("a")
				.with_attr("class", "mod_host")
				.with_attr("href", link.url)
				.with_attr("title", link.host.get_mod_tooltip(this) + ` (${link.loader})`);
			host_div.append_child(a);

			if (link.host.create_icon) {
				a.append_child(link.host.create_icon(html, 42, 42));
			} else {
				a.append_child(new html.Text(link.host.name));
			}
		}

		return card;
	}
};

const STATE = {
	mods: [],
	loaded: false
};

export async function load_mods() {
	if (!STATE.loaded) {
		const mods = [];

		for await (const dir_entry of Deno.readDir("./alternatives")) {
			if (dir_entry.isFile && dir_entry.name.endsWith(".mjs")) {
				mods.push(dir_entry.name.substr(0, dir_entry.name.length - 4));
			}
		}

		STATE.mods = await Promise.all(mods.map(async (id) => {
			const mod = (await import(`../alternatives/${id}.mjs`))["default"];
			mod.namespace = id;
			return mod;
		}));

		STATE.loaded = true;
	}

	return STATE.mods;
}
