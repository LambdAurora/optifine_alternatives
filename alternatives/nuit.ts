import Mod from "../build_logic/mod.ts";

const mod = new Mod(
	"Nuit",
	"FlashyReese",
	"Allows resource packs to define custom skyboxes. OptiFine format is not compatible by default, converters are available. Formerly known as FabricSkyboxes.",
)
	.icon("https://cdn.modrinth.com/data/YBz7DOs8/be8486a3e6a10476f6989928e766e154a6b271bc_96.webp")
	.add_version({ loader: ["fabric"], v: [17, 18, 19.4, 20.4] })
	.add_category("Cosmetic")
	.add_link(
		{ host: "modrinth" },
		{ host: "curseforge" },
		{ host: "github" },
	);

await mod.import_versions_from_modrinth();

export default mod;
