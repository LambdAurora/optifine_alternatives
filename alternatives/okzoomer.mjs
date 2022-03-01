import Mod from "../build_src/mod.mjs";

export default new Mod(
	"Ok Zoomer",
	"EnnuiL",
	"Adds a highly-configurable zoom key for Fabric. The zoom is yours!",
)
.icon("https://cdn.modrinth.com/data/aXf2OSFU/icon.png")
.add_version(14, 15, 16, 17, 18)
.add_category("Utility", "Zoom")
.add_link(
	{ host: "curseforge", params: { namespace: "ok-zoomer" } },
	{ host: "modrinth", params: { namespace: "ok-zoomer" } },
	{ host: "github" }
);
