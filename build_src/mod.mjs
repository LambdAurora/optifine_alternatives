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
						resolved.push({ host: existing, url: existing.get_mod_url(this, link.params) });
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
	 * @return {string} a prettified string of the Minecraft versions the mod is compatible with
	 */
	get_prettified_version() {
		if (this.versions.length === 0)
			return "";

		let prettified = "";
		let min = this.versions[0], current = min;

		for (let i = 1; i < this.versions.length; i++) {
			if (this.versions[i].id !== current.id + 1 || this.versions[i].note !== current.note) {
				const note = current.note === "" ? "" : ` (${current.note})`;
				prettified += (prettified.length === 0 ? "" : ", ")
				           + (min === current ? `1.${current.id}${note}` : `1.${min.id} -> 1.${current.id}${note}`);
				min = current = this.versions[i];
			} else {
				current = this.versions[i];
			}
		}

		const note = current.note === "" ? "" : ` (${current.note})`;
		prettified += (prettified.length === 0 ? "" : ", ")
				   + (min === current ? `1.${current.id}${note}` : `1.${min.id} -> 1.${current.id}${note}`);

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

		const metadata_list = new md.List([new md.ListEntry(`Available for: ${this.get_prettified_version()}  `)]);

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
