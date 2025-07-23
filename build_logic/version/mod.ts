import type { McVersion, ModVersion, Version } from "./type.ts";
import { fetch_versions } from "./piston.ts";
import DETAILED_VERSIONS_DATA from "./data.json" with { type: "json" };
import flexverCompare from "flexver";

export type ModVersions = { loader: string[]; versions: ModVersion[] }[];

async function build_versions_registry(): Promise<McVersion[]> {
	const fullDetailedVersionsData = DETAILED_VERSIONS_DATA.map((version) => {
		if (typeof version === "string") {
			return { id: version };
		} else {
			return version;
		}
	}).map(
		(version) => ({
			id: version.id!,
			compatible: version.compatible ?? [],
			minor: version.minor ?? false,
		} satisfies McVersion),
	);

	const releases = (await fetch_versions())
		.filter((version) => version.type === "release" || version.type === "old_beta");

	const relevant_releases = releases.filter((version) => fullDetailedVersionsData.find((known) => known.compatible.includes(version.id)) === undefined);

	return relevant_releases.map((version) => {
		const candidate = fullDetailedVersionsData.find((known) => known.id === version.id);

		if (candidate) {
			return candidate;
		} else {
			return {
				id: version.id,
				compatible: [],
				minor: false,
			} satisfies McVersion;
		}
	});
}

export function compare_versions(a: Version, b: Version) {
	if (a.id[0] === "b") {
		if (b.id[0] === "b") {
			return flexverCompare(a.id.substring(1), b.id.substring(1));
		} else {
			return -1;
		}
	} else {
		return flexverCompare(a.id, b.id);
	}
}

export interface McVersionRegistry {
	/**
	 * The list of Minecraft versions.
	 */
	readonly versions: readonly McVersion[];
	/**
	 * Gets a Minecraft version or the associated "root" version from the given identifier.
	 *
	 * @param id the version identifier
	 * @returns the found Minecraft version, or `null` otherwise
	 */
	find_version(id: string): McVersion | null;
	find_version_index(id: string): number;
	/**
	 * Segments the given Minecraft versions into linear portions.
	 *
	 * @param versions versions to segment
	 */
	segment_versions(versions: ModVersion[]): ModVersion[][];
}

export const VERSION_REGISTRY: McVersionRegistry = {
	versions: await build_versions_registry(),
	find_version(id) {
		const index = this.find_version_index(id);

		return index === -1 ? null : this.versions[index];
	},
	find_version_index(id) {
		return this.versions.findIndex((version) => version.id === id || version.compatible.includes(id));
	},
	segment_versions(versions) {
		const simplified = get_simplified_versions(this, versions);
		const segments: ModVersion[][] = [];

		const computed: { version: ModVersion; distance: number }[] = [];

		for (let i = 0; i < simplified.length; i++) {
			const current = simplified[i];

			if (i === 0) {
				computed.push({ version: current, distance: 0 });
				continue;
			}

			const last = simplified[i - 1];
			const last_mc_index = this.find_version_index(last.id);
			const current_mc_index = this.find_version_index(current.id);
			const distance = Math.abs(current_mc_index - last_mc_index);

			if (distance > 1) {
				const slice = this.versions.slice(current_mc_index + 1, last_mc_index);
				if (slice.every((version) => version.minor)) {
					computed.push({ version: current, distance: 1 });
				} else {
					computed.push({ version: current, distance: distance });
				}
			} else {
				computed.push({ version: current, distance: 1 });
			}
		}

		for (let i = 0; i < computed.length; i++) {
			const entry = computed[i];

			if (i === 0) {
				segments.push([entry.version]);
				continue;
			}

			if (entry.distance <= 1) {
				const segment = segments[segments.length - 1];
				segment.push(entry.version);
			} else {
				segments.push([entry.version]);
			}
		}

		return segments;
	},
};

function get_simplified_versions(
	registry: McVersionRegistry,
	versions: ModVersion[],
): ModVersion[] {
	const groups: { version: ModVersion; mc: McVersion }[][] = [];
	const mapped = versions.map((version) => ({
		version,
		mc: registry.find_version(version.id),
	}));

	for (const version of mapped) {
		if (version.mc === null) {
			throw new Error(`Invalid MC version: "${version.version.id}".`);
		}
	}

	let current_mc_version: McVersion | null = null;
	for (const version of mapped as { version: ModVersion; mc: McVersion }[]) {
		if (version.mc !== current_mc_version) {
			current_mc_version = version.mc;
			groups.push([]);
		}

		const group = groups[groups.length - 1];
		group.push(version);
	}

	const list = groups.map((group) => {
		const annotated_version = group.find((version) => version.version.note !== undefined);
		if (annotated_version !== undefined) {
			return {
				id: annotated_version.mc.id,
				note: annotated_version.version.note,
			};
		}

		return {
			id: group[0].mc.id,
		};
	});

	return list.toSorted(compare_versions);
}

//region Previous implementation
/**
 * Segments the given Minecraft versions into linear portions.
 *
 * @param versions versions to segment
 */
/*export function segment_versions(versions: ModVersion[]) {
	const version_segments: ModVersion[][] = [];

	for (let i = 0; i < versions.length;) {
		const segment = attempt_segment(versions, i);
		version_segments.push(segment.segment);
		i = segment.end_index;
	}

	return version_segments;
}*/

/**
 * Attempts to create a linear segment of Minecraft versions.
 *
 * @param versions the versions to segment
 * @param current_index the current index of the versions array
 */
/*function attempt_segment(versions: ModVersion[], current_index: number): { segment: ModVersion[], end_index: number } {
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
}*/
//endregion
