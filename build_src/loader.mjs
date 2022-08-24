export default class Loader {
	constructor(name, website, create_icon) {
		this.id = undefined;
		this.name = name;
		this.website = website;
		this.create_icon = create_icon;
	}

	get_fancy_icon(html) {
		return this.create_icon(html, 24, 24).with_attr("alt", this.name);
	}
};

const STATE = {
	loaders: [],
	get_by_id(id) {
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
		const loaders = [];

		for await (const dir_entry of Deno.readDir("./loaders")) {
			if (dir_entry.isFile && dir_entry.name.endsWith(".mjs")) {
				loaders.push(dir_entry.name.substr(0, dir_entry.name.length - 4));
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
