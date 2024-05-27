import * as html from "@lambdaurora/libhtml";
import * as md from "@lambdaurora/libmd";
import Mod from "./mod.ts";

export default class Requirement {
	public id: string = "";
	public providers: Mod[] = [];

	constructor(public name: string, public description: string) {
		this.name = name;
		this.description = description;
	}

	is_mod(): boolean {
		return this.as_mod() !== undefined;
	}

	as_mod() {
		return this.providers.find(provider => provider.namespace === this.id);
	}

	resolve_providers(mods: Mod[]) {
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
	requirements: [] as Requirement[],
	loaded: false
};

export async function load_requirements() {
	if (!STATE.loaded) {
		const requirements: string[] = [];

		for await (const dir_entry of Deno.readDir("./requirements")) {
			if (dir_entry.isFile && dir_entry.name.endsWith(".mjs")) {
				requirements.push(dir_entry.name.substr(0, dir_entry.name.length - 4));
			}
		}

		STATE.requirements = await Promise.all(requirements.map(async (id) => {
			const requirement = (await import(`../requirements/${id}.mjs`))["default"] as Requirement;
			requirement.id = id;
			return requirement;
		}));
		STATE.loaded = true;
	}

	return STATE.requirements;
}
