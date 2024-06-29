import Mod from "../build_src/mod.ts";

const mod = new Mod(
	"Animatica",
	"FoundationGames",
	"A mod implementing the OptiFine/MCPatcher animated texture format.",
)
.icon("https://cdn.modrinth.com/data/PRN43VSY/icon.png")
.add_version({ loader: ["fabric"], v: [17, 18, 19.1, 20.1] }, { loader: ["quilt"], v: [18, 19.1, 20.1] })
.add_category("Cosmetic")
.add_link(
	{ host: "modrinth" },
	{ host: "curseforge" },
	{ host: "github" }
);

await mod.import_versions_from_modrinth();

export default mod;
