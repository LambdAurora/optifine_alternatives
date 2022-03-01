import { default as md, html } from "https://lambdaurora.dev/lib.md/lib/index.mjs";

export default class Requirement {
	constructor(name, description) {
		this.name = name;
		this.description = description;
		this.providers = [];
	}

	is_mod() {
		return this.as_mod() !== undefined;
	}

	as_mod() {
		return this.providers.find(provider => provider.namespace === this.id);
	}

	resolve_providers(mods) {
		this.providers = [];

		for (const mod of mods) {
			if (mod.is_providing(this)) {
				this.providers.push(mod);
			}

			if (mod.namespace === this.id) {
				this.description = mod.description;
			}
		}

		return this.providers;
	}

	get_markdown_link() {
		if (this.is_mod()) {
			return "[TODO]";
		} else {
			return new md.Link("#compatibility", this.name, "More information.");
		}
	}

	get_html_link() {
		if (this.is_mod()) {
			return new html.Text("[TODO]");
		} else {
			return html.create_element("a")
				.with_attr("href", "#compatibility")
				.with_attr("title", "More information.")
				.with_child(new html.Text(this.name)
			);
		}
	}
};

const STATE = {
	requirements: [],
	loaded: false
};

export async function load_requirements() {
	if (!STATE.loaded) {
		const requirements = [];

		for await (const dir_entry of Deno.readDir("./requirements")) {
			if (dir_entry.isFile && dir_entry.name.endsWith(".mjs")) {
				requirements.push(dir_entry.name.substr(0, dir_entry.name.length - 4));
			}
		}

		STATE.requirements = await Promise.all(requirements.map(async (id) => {
			const requirement = (await import(`../requirements/${id}.mjs`))["default"];
			requirement.id = id;
			return requirement;
		}));
		STATE.loaded = true;
	}

	return STATE.requirements;
}
