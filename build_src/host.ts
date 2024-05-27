import * as html from "@lambdaurora/libhtml";
import Mod from "./mod.ts";

export interface ModPathResolveParams {
	namespace: string;
	author: string;
	modloader?: string;
}

export type ModPathResolver = (base_url: string, params: ModPathResolveParams) => string;

export type IconFactory = (width: number, height: number) => html.Element;

export class Host {
	public id: string = "";

	constructor(public name: string, public base_url: string, private mod_path_resolver: ModPathResolver, public create_icon: IconFactory) {
	}

	get_mod_url(mod: Mod, params?: Partial<ModPathResolveParams>) {
		const complete_params = Object.assign({
			namespace: mod.namespace,
			author: mod.author
		}, params);

		return this.mod_path_resolver(this.base_url, complete_params);
	}

	get_mod_tooltip(mod: Mod): string {
		return `${mod.name} ${this.name} page`;
	}
};

const STATE = {
	hosts: [] as Host[],
	loaded: false
};

export async function load_hosts(): Promise<Host[]> {
	if (!STATE.loaded) {
		const hosts: string[] = [];

		for await (const dir_entry of Deno.readDir("./hosts")) {
			if (dir_entry.isFile && dir_entry.name.endsWith(".mjs")) {
				hosts.push(dir_entry.name.substring(0, dir_entry.name.length - 4));
			}
		}

		STATE.hosts = await Promise.all(hosts.map(async (id) => {
			const requirement = (await import(`../hosts/${id}.mjs`))["default"] as Host;
			requirement.id = id;
			return requirement;
		}));

		STATE.loaded = true;
	}

	return STATE.hosts;
}
