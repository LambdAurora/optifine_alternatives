import Mod from "../build_src/mod.ts";

export default new Mod(
	"Connected Block Textures",
	"TwilightFlower",
	"An implementation of the MCPatcher/Optifine connected textures format on the Fabric modloader. Unmaintained.",
)
.icon("images/connected-block-textures.png")
.add_version({ loader: ["fabric"], v: [16] })
.add_category("Cosmetic")
.add_link(
	{ host: "github", params: { namespace: "connected-block-textures" } }
)
.requires("frapi");
