import { default as md, html } from "https://lambdaurora.dev/lib.md/lib/index.mjs";
import { load_hosts } from "./host.mjs";
import { load_requirements } from "./requirement.mjs";

function new_version(version) {
	if (typeof version === "number") {
		return {id: version, note: ""};
	} else {
		return version;
	}
}

export default class Mod {
	constructor(name, author, description) {
		this.name = name;
		this.author = author;
		this.description = description;
		this._icon = { url: "", pixelated: false };
		this.versions = [];
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
	 *
	 * @param {...Number} versions the versions to add
	 */
	add_version() {
		for (let i = 0; i < arguments.length; i++) {
			if (arguments[i] instanceof Array) {
				this.versions.push(...(arguments[i].map(new_version)));
			} else {
				this.versions.push(new_version(arguments[i]));
			}
		}

		return this;
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
		let min = this.versions[0], current = min;

		for (let i = 1; i < this.versions.length; i++) {
			if (this.versions[i].id !== current.id + 1 || this.versions[i].note !== current.note) {
				const note = current.note === "" ? "" : ` (${current.note})`;
				prettified.push(min === current ? `1.${current.id}${note}` : `1.${min.id} -> 1.${current.id}${note}`);
				min = current = this.versions[i];
			} else {
				current = this.versions[i];
			}
		}

		const note = current.note === "" ? "" : ` (${current.note})`;
		prettified.push(min === current ? `1.${current.id}${note}` : `1.${min.id} -> 1.${current.id}${note}`);

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

		const versions_ul = html.create_element("ul");
		this.get_prettified_version().forEach(version => versions_ul.append_child(html.create_element("li").with_child(new html.Text(version))))
		versions_div.append_child(versions_ul);

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
