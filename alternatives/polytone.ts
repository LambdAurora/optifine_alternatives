import Mod from "../build_logic/mod.ts";

const mod = new Mod(
	"Polytone",
	"MehVahdJukaar",
	"Multipurpose Visual Customization mod: tweak colors, colormaps, lightmaps, sounds, GUI elements, biome effects, particles, fog colors and more." +
		"Supports old Optifine formats",
)
	.icon("https://cdn.modrinth.com/data/3qAYkBMB/828636188cd2427eb1158dd1e0bddd42d318ccbf_96.webp")
	.add_version(
		{ loader: ["fabric"], v: [20.2, 20.3, 20.4] },
		{ loader: ["neoforge"], v: [20.2, 20.3, 20.4] },
		{ loader: ["forge"], v: [20.2, 20.3, 20.4] },
	).add_category("Cosmetic")
	.add_link(
		{ host: "modrinth" },
		{ host: "curseforge" },
		{ host: "github" },
	);

await mod.import_versions_from_modrinth();

export default mod;
