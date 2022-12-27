import Mod from "../build_src/mod.mjs";

export default new Mod(
	"LambdaBetterGrass",
	"LambdAurora",
	"Adds better grass and snow to the game.",
)
.icon("https://cdn.modrinth.com/data/2Uev7LdA/icon.png")
.add_version({ loader: ["quilt"], v: [18, 19.2] }, { loader: ["fabric"], v: [16, 17, 18, 19.2] })
.add_category("Cosmetic")
.add_link(
	{ host: "modrinth" },
	{ host: "curseforge" },
	{ host: "github" }
)
.requires("frapi");
