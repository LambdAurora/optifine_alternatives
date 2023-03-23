import Mod from "../build_src/mod.mjs";

export default new Mod(
	"Enhanced Block Entities",
	"FoundationGames",
	"Reduce FPS lag with block entities, as well as customize them with resource packs.",
)
.icon("https://cdn.modrinth.com/data/OVuFYfre/icon.png")
.add_version({ loader: ["quilt"], v: [18, 19.3] }, { loader: ["fabric"], v: [16, 17, 18, 19.3] })
.add_category("Performance", "Client")
.add_link(
	{ host: "modrinth" },
	{ host: "curseforge", params: { namespace: "enhanced-block-entities" } },
	{ host: "github", params: { namespace: "EnhancedBlockEntities" } }
);
