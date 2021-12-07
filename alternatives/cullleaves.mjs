import Mod from "../build_src/mod.mjs";

const HOST_ID = "cull-leaves";

export default new Mod(
	"Cull Leaves",
	"TeamMidnightDust",
	"Adds culling to leaf blocks, providing a huge performance boost over vanilla. Similar to OptiFine's Smart Leaves feature.",
)
.add_version(16, 17, 18)
.add_category("Performance", "Client")
.add_link(
	{ host: "curseforge", params: { namespace: HOST_ID } },
	{ host: "modrinth", params: { namespace: HOST_ID } },
	{ host: "github" }
);
