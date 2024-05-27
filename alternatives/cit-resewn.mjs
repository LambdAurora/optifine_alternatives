import Mod from "../build_src/mod.ts";

const mod = new Mod(
	"CIT Resewn",
	"shsupercm",
	"Re-implements MCPatcher's CIT (custom item textures from optifine resource packs)",
)
.icon("https://cdn.modrinth.com/data/otVJckYQ/icon.png")
.add_version({ loader: ["fabric", "quilt"], v: [17, 18, 19.3] })
.add_category("Cosmetic")
.add_link(
	{ host: "modrinth" },
	{ host: "curseforge" },
	{ host: "github", params: { namespace: "CITResewn" } },
);

await mod.import_versions_from_modrinth("cit-resewn");

export default mod;
