import { Version } from "./type.ts";

/**
 * The type of Minecraft version.
 */
export type PistonMcVersionType = "release" | "old_beta" | "snapshot";

export interface PistonMcVersion extends Version {
	/**
	 * The type of version.
	 */
	readonly type: PistonMcVersionType;
}

interface PistonVersionList {
	versions: PistonMcVersion[];
}

export async function fetch_versions(): Promise<PistonMcVersion[]> {
	return await fetch("https://piston-meta.mojang.com/mc/game/version_manifest_v2.json")
		.then((response) => response.json())
		.then((response) => (response as PistonVersionList).versions);
}
