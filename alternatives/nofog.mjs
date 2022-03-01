import Mod from "../build_src/mod.mjs";

export default new Mod(
	"NoFog",
	"Tommeh2, Virtuoel",
	"A simple client-side mod supporting both forge and fabric that removes all fog. (ARR)",
)
.icon("https://github.com/Virtuoel/NoFog/blob/fabric/1.16.5-1.x.x/src/main/resources/assets/no_fog/icon.png?raw=true")
.add_version(16, 17, 18)
.add_category("Fog")
.add_link(
	{ host: "curseforge" }
);
