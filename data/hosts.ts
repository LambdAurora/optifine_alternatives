import { Host } from "./host.ts";
import Modrinth from "./hosts/modrinth.ts";
import CurseForge from "./hosts/curseforge.ts";
import GitHub from "./hosts/github.ts";

export const HOSTS: Readonly<Host[]> = Object.freeze([
	Modrinth,
	CurseForge,
	GitHub
]);
