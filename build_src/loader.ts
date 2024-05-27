import * as html from "@lambdaurora/libhtml";

export default class Loader {
	public id = "";

	constructor(
		public readonly name: string,
		public readonly website: string,
		public readonly create_icon: (width: number, height: number) => html.Element
	) {
		this.name = name;
		this.website = website;
		this.create_icon = create_icon;
	}

	get_fancy_icon() {
		return this.create_icon(24, 24).with_attr("alt", this.name);
	}
};

const STATE = {
	loaders: [] as Loader[],
	get_by_id(id: string) {
		for (const loader of this.loaders) {
			if (loader.id === id) {
				return loader;
			}
		}

		return null;
	},
	loaded: false
};

export async function load_loaders() {
	if (!STATE.loaded) {
		const loaders: string[] = [];

		for await (const dir_entry of Deno.readDir("./loaders")) {
			if (dir_entry.isFile && dir_entry.name.endsWith(".mjs")) {
				loaders.push(dir_entry.name.substring(0, dir_entry.name.length - 4));
			}
		}

		STATE.loaders = await Promise.all(loaders.map(async (id) => {
			const loader = (await import(`../loaders/${id}.mjs`))["default"];
			loader.id = id;
			return loader;
		}));

		STATE.loaded = true;
	}

	return STATE;
}
