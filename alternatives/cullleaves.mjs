import Mod from "../build_src/mod.mjs";

const HOST_ID = "cull-leaves";

export default new Mod(
	"Cull Leaves",
	"TeamMidnightDust",
	"Adds culling to leaf blocks, providing a huge performance boost over vanilla. Similar to OptiFine's Smart Leaves feature.",
)
.icon("https://cdn.modrinth.com/data/GNxdLCoP/icon.png")
.add_version({ loader: ["quilt"], v: [17, 18, 19] }, { loader: ["fabric"], v: [16, 17, 18, 19] })
.add_category("Performance", "Client")
.add_link(
	{ host: "modrinth", params: { namespace: HOST_ID } },
	{ host: "curseforge", params: { namespace: HOST_ID } },
	{ host: "github" }
);
