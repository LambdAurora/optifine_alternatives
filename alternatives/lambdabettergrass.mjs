import Mod from "../build_src/mod.ts";

const mod = new Mod(
	"LambdaBetterGrass",
	"LambdAurora",
	"Adds better grass and snow to the game.",
)
.icon("https://cdn.modrinth.com/data/2Uev7LdA/icon.png")
.add_category("Cosmetic")
.add_link(
	{ host: "modrinth" },
	{ host: "curseforge" },
	{ host: "github" }
)
.requires("frapi");

await mod.import_versions_from_modrinth();

export default mod;
