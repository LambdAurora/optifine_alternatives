import Mod from "../build_src/mod.mjs";

export default new Mod(
	"Connected Block Textures",
	"TwilightFlower",
	"An implementation of the MCPatcher/Optifine connected textures format on the Fabric modloader. Unmaintained.",
)
.icon("https://cdn.discordapp.com/attachments/523633816078647296/708497185003536424/connected.png")
.add_version(16)
.add_category("Cosmetic")
.add_link(
	{ host: "curseforge", params: { namespace: "connected-block-textures" } },
	{ host: "github", params: { namespace: "connected-block-textures" } }
)
.requires("frapi");
