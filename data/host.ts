import * as html from "@lambdaurora/libhtml";
import Mod from "../build_src/mod.ts";

export interface ModPathResolveParams {
	namespace: string;
	author: string;
	modloader?: string;
}

export type ModPathResolver = (base_url: string, params: ModPathResolveParams) => string;

export type IconFactory = (width: number, height: number) => html.Element;

export class Host {
	public readonly id: string;

	constructor(public name: string, public base_url: string, private mod_path_resolver: ModPathResolver, public create_icon: IconFactory) {
		this.id = name.toLowerCase();
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
}
