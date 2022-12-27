import Mod from "../build_src/mod.mjs";

export default new Mod(
	"NoFog",
	"Tommeh2, Virtuoel",
	"A simple client-side mod supporting both forge and fabric that removes all fog. (ARR)",
)
.icon("https://github.com/Virtuoel/NoFog/blob/fabric/1.16.5-1.x.x/src/main/resources/assets/no_fog/icon.png?raw=true")
.add_version({ loader: ["fabric", "quilt"], v: [16, 17, 18, 19.3] }, { loader: ["forge"], v: [10.2, 11.2, 12.2, 13.2, 14, 15, 16, 17, 18, 19.3] })
.add_category("Fog")
.add_link(
	{ host: "modrinth", params: { namespace: "no_fog" } },
	{ host: "curseforge" },
	{ host: "github", params: { author: "Virtuoel"} }
);
