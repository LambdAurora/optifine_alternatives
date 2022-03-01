import Mod from "../build_src/mod.mjs";

export default new Mod(
	"Animatica",
	"FoundationGames",
	"A mod implementing the OptiFine/MCPatcher animated texture format.",
)
.icon("https://cdn.modrinth.com/data/PRN43VSY/icon.png")
.add_version(17, 18)
.add_category("Cosmetic")
.add_link(
	{ host: "curseforge" },
	{ host: "modrinth" },
	{ host: "github" }
);
