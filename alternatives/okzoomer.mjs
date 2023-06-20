import Mod from "../build_src/mod.mjs";

export default new Mod(
	"Ok Zoomer",
	"EnnuiL",
	"Adds a highly-configurable zoom key for Quilt. The zoom is yours!",
)
.icon("https://cdn.modrinth.com/data/aXf2OSFU/icon.png")
.add_version({ loader: ["quilt"], v: [18, 19, 20.1] }, { loader: ["fabric"], v: [14, 15, 16, 17, 18] })
.add_category("Utility", "Zoom")
.add_link(
	{ host: "modrinth", params: { namespace: "ok-zoomer" } },
	{ host: "curseforge", params: { namespace: "ok-zoomer" } },
	{ host: "github" }
);
