import Mod from "../build_logic/mod.ts";

const mod = new Mod(
	"Fabrishot",
	"ramidzkh",
	"Take insanely large screenshots, useful for content creation.",
)
	.icon("https://cdn.modrinth.com/data/3qsfQtE9/icon.png")
	.add_version({ loader: ["fabric"], v: [16, 17, 18, 19.4, 20.1] })
	.add_category("Utility")
	.add_link(
		{ host: "modrinth" },
		{ host: "curseforge" },
		{ host: "github" },
	);

await mod.import_versions_from_modrinth();

export default mod;
