export default class Host {
	constructor(name, base_url, mod_path_resolver, create_icon) {
		this.id = undefined;
		this.name = name;
		this.base_url = base_url;
		this.mod_path_resolver = mod_path_resolver;
		this.create_icon = create_icon;
	}

	get_mod_url(mod, params) {
		const complete_params = Object.assign({
			namespace: mod.namespace,
			author: mod.author
		}, params);

		return this.mod_path_resolver(this.base_url, complete_params);
	}

	get_mod_tooltip(mod) {
		return `${mod.name} ${this.name} page`;
	}
};

const STATE = {
	hosts: [],
	loaded: false
};

export async function load_hosts() {
	if (!STATE.loaded) {
		const hosts = [];

		for await (const dir_entry of Deno.readDir("./hosts")) {
			if (dir_entry.isFile && dir_entry.name.endsWith(".mjs")) {
				hosts.push(dir_entry.name.substring(0, dir_entry.name.length - 4));
			}
		}

		STATE.hosts = await Promise.all(hosts.map(async (id) => {
			const requirement = (await import(`../hosts/${id}.mjs`))["default"];
			requirement.id = id;
			return requirement;
		}));

		STATE.loaded = true;
	}

	return STATE.hosts;
}
