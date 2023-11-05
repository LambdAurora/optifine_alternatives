import Mod from "../build_src/mod.mjs";

export default new Mod(
	"Animatica",
	"FoundationGames",
	"A mod implementing the OptiFine/MCPatcher animated texture format.",
)
.icon("https://cdn.modrinth.com/data/PRN43VSY/icon.png")
.add_version({ loader: ["quilt"], v: [18, 19, 20.1] }, { loader: ["fabric"], v: [17, 18, 19, 20.1] })
.add_category("Cosmetic")
.add_link(
	{ host: "modrinth" },
	{ host: "curseforge" },
	{ host: "github" }
);
