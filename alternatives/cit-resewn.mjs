import Mod from "../build_src/mod.mjs";

export default new Mod(
	"CIT Resewn",
	"shsupercm",
	"Re-implements MCPatcher's CIT (custom item textures from optifine resource packs)",
)
.icon("https://cdn.modrinth.com/data/otVJckYQ/icon.png")
.add_version(17, 18)
.add_category("Cosmetic")
.add_link(
	{ host: "curseforge" },
	{ host: "modrinth" },
	{ host: "github", params: { namespace: "CITResewn" } },
);
