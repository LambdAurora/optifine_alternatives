import Mod from "../build_logic/mod.ts";
import { CIT } from "../build_logic/status.ts";

const mod = new Mod(
	"CIT Resewn",
	"shsupercm",
	"Re-implements MCPatcher's CIT (custom item textures from optifine resource packs)",
)
	.icon("https://cdn.modrinth.com/data/otVJckYQ/icon.png")
	.add_version({ loader: ["fabric"], v: [17, 18, 19.3] })
	.add_category("Cosmetic")
	.add_link(
		{ host: "modrinth" },
		{ host: "curseforge" },
		{ host: "github", params: { namespace: "CITResewn" } },
	).set_status(CIT);

await mod.import_versions_from_modrinth("cit-resewn");

export default mod;
