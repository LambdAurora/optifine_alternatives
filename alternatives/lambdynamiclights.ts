import Mod from "../build_logic/mod.ts";

const mod = new Mod(
	"LambDynamicLights",
	"LambdAurora",
	"The most feature-complete dynamic lighting mod for Fabric.",
)
	.icon("https://cdn.modrinth.com/data/yBW8D80W/d4f5c3ff8df7caf024178b04eca6d69f95979cfe_96.webp")
	.add_version({ loader: ["fabric"], v: [15, 16.1] })
	.add_category("Cosmetic")
	.add_link(
		{ host: "modrinth" },
		{ host: "curseforge" },
		{ host: "github" },
	);

await mod.import_versions_from_modrinth();

export default mod;
