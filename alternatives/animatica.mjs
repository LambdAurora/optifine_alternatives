import Mod from "../build_src/mod.mjs";

export default new Mod(
	"Animatica",
	"FoundationGames",
	"A mod implementing the OptiFine/MCPatcher animated texture format.",
)
.add_version(17)
.add_category("Cosmetic")
.add_link(
	{ host: "curseforge" },
	{ host: "modrinth" },
	{ host: "github" }
);
