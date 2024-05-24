import Mod from "../build_src/mod.mjs";

const mod = new Mod(
	"NoFog",
	"Tommeh2, Virtuoel",
	"A simple client-side mod supporting both forge and fabric that removes all fog. (ARR)",
)
.icon("https://github.com/Virtuoel/NoFog/blob/fabric/1.16.5-1.x.x/src/main/resources/assets/no_fog/icon.png?raw=true")
.add_version(
	{ loader: ["fabric", "quilt"], v: [16.5, 17, 18.2, 19.1, 20.3] },
	{ loader: ["forge"], v: [10.2, 11.2, 12.2, 13.2, 14, 15, 16.5, 17, 18.2, 19.1] },
	{ loader: ["neoforge"], v: [20.3] }
)
.add_category("Fog")
.add_link(
	{ host: "modrinth", params: { namespace: "no_fog" } },
	{ host: "curseforge" },
	{ host: "github", params: { author: "Virtuoel"} }
);

await mod.import_versions_from_modrinth("no_fog");

export default mod;
