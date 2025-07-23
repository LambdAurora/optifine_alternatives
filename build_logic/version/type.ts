/**
 * Represents a version.
 */
export interface Version {
	/**
	 * The version identifier.
	 */
	readonly id: string;
}

/**
 * Represents a Minecraft version of a mod.
 */
export interface ModVersion extends Version {
	/**
	 * A note associated with this version.
	 */
	readonly note?: string;
}

/**
 * Represents a Minecraft version.
 */
export interface McVersion extends Version {
	/**
	 * The list of versions that are compatible with this version.
	 */
	readonly compatible: readonly string[];
	/**
	 * `true` if this version is a minor version, or `false` otherwise.
	 */
	readonly minor: boolean;
}
