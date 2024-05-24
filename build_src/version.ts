import Loader from "./loader.ts";

export type VersionType = "release" | "snapshot";

export interface VersionBase {
	readonly id: string;
}

export interface McVersion extends VersionBase {
	type: VersionType;
}

export interface ModVersion extends VersionBase {
	note: string;
}

export type ModVersions = { loader: string[], versions: ModVersion[] }[];
export type ResolvedModVersions = { loader: Loader[], versions: ModVersion[] }[];

interface VersionList {
	versions: McVersion[]
}

const VERSIONS = await load_versions();
const RELEASES = VERSIONS.filter(version => version.type === "release");

async function load_versions() {
	return await fetch("https://piston-meta.mojang.com/mc/game/version_manifest_v2.json")
		.then(response => response.json())
		.then(response => (response as VersionList).versions)
}

export function get_versions() {
	return VERSIONS;
}

/**
 * Segments the given Minecraft versions into linear portions.
 *
 * @param versions versions to segment
 */
export function segment_versions(versions: ModVersion[]) {
	const version_segments: ModVersion[][] = [];

	for (let i = 0; i < versions.length;) {
		const segment = attempt_segment(versions, i);
		version_segments.push(segment.segment);
		i = segment.end_index;
	}

	return version_segments;
}

/**
 * Attempts to create a linear segment of Minecraft versions.
 *
 * @param versions the versions to segment
 * @param current_index the current index of the versions array
 */
function attempt_segment(versions: ModVersion[], current_index: number): { segment: ModVersion[], end_index: number } {
	const start_index = current_index;
	let current_mc_index = RELEASES.findIndex((version) => version.id === versions[current_index].id);

	if (current_mc_index === -1) {
		throw new Error(`Invalid MC version "${versions[current_index].id}".`);
	}

	const current_note = versions[start_index].note;
	let last_version = versions[start_index].id;
	current_mc_index--;
	for (current_index++; current_index < versions.length; current_index++) {
		const current_version = versions[current_index];

		if (current_version.note !== current_note) { // We segment annotated versions separately.
			break;
		} else if (current_version.id !== RELEASES[current_mc_index].id) {
			const last_version_components = last_version.split(".").map(c => parseInt(c));
			const current_version_components = current_version.id.split(".").map(c => parseInt(c));

			if (last_version_components[0] === current_version_components[0]) { // If same major version (let's avoid some weird edge cases even if unlikely)
				if (last_version_components[1] === current_version_components[1] - 1) { // We bumped minor version, we consider that linear.
					const mc_index = RELEASES.findIndex((version) => version.id === current_version.id);

					if (mc_index === -1) {
						throw new Error(`Invalid MC version "${current_version.id}".`);
					}

					current_mc_index = mc_index;
				} else {
					break;
				}
			} else {
				break;
			}
		}

		last_version = current_version.id;
		current_mc_index--;
	}

	return {
		segment: versions.slice(start_index, current_index),
		end_index: current_index
	};
}
