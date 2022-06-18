import Mod from "../build_src/mod.mjs";

export default new Mod(
	"Enhanced Block Entities",
	"FoundationGames",
	"Reduce FPS lag with block entities, as well as customize them with resource packs.",
)
.icon("https://cdn.modrinth.com/data/OVuFYfre/icon.png")
.add_version(16, 17, 18, 19)
.add_category("Performance", "Client")
.add_link(
	{ host: "curseforge", params: { namespace: "enhanced-block-entities" } },
	{ host: "modrinth" },
	{ host: "github", params: { namespace: "EnhancedBlockEntities" } }
);
