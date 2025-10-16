import Mod from "../build_src/mod.mjs";

export default new Mod(
	"Enhanced Block Entities Reforged (Unofficial)",
	"CCr4ft3r, FoundationGames",
	"Reduce FPS lag with block entities, as well as customize them with resource packs. An unofficial Forge port of Enhanced Block Entities.",
)
.icon("https://media.forgecdn.net/avatars/808/509/638178672498611045.png")
.add_version({ loader: ["forge"], v: [18, 19.2] })
.add_category("Performance", "Client")
.add_link(
	{ host: "curseforge", params: { namespace: "enhanced-block-entities-reforged-unofficial" } },
	{ host: "github", params: { author: "CCr4ft3r", namespace: "EnhancedBlockEntitiesReforged" } }
);
