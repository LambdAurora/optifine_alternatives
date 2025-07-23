import Mod from "../build_logic/mod.ts";

const HOST_ID = "cull-leaves";

const mod = new Mod(
	"Cull Leaves",
	"TeamMidnightDust",
	"Adds culling to leaf blocks, providing a huge performance boost over vanilla. Similar to OptiFine's Smart Leaves feature.",
)
	.icon("https://cdn.modrinth.com/data/GNxdLCoP/icon.png")
	.add_version({ loader: ["fabric"], v: [16, 17, 18, 19.3, 20.1] }, { loader: ["forge"], v: [19.2, 19.3, 20.1] })
	.add_category("Performance", "Client")
	.add_link(
		{ host: "modrinth", params: { namespace: HOST_ID } },
		{ host: "curseforge", params: { namespace: HOST_ID } },
		{ host: "github" },
	);

await mod.import_versions_from_modrinth(HOST_ID);

export default mod;
