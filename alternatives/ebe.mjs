import Mod from "../build_src/mod.ts";

const mod = new Mod(
	"Enhanced Block Entities",
	"FoundationGames",
	"Reduce FPS lag with block entities, as well as customize them with resource packs.",
)
.icon("https://cdn.modrinth.com/data/OVuFYfre/icon.png")
.add_version({ loader: ["fabric"], v: [17, 18, 18.1, 19, 20.1] }, { loader: ["quilt"], v: [18, 18.1, 19, 20.1] })
.add_category("Performance", "Client")
.add_link(
	{ host: "modrinth" },
	{ host: "curseforge", params: { namespace: "enhanced-block-entities" } },
	{ host: "github", params: { namespace: "EnhancedBlockEntities" } }
);

await mod.import_versions_from_modrinth("ebe");

export default mod;
