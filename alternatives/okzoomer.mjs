import Mod from "../build_src/mod.ts";

const NAMESPACE = "ok-zoomer";

const mod = new Mod(
	"Ok Zoomer",
	"EnnuiL",
	"Adds a highly-configurable zoom key for Quilt. The zoom is yours!",
)
.icon("https://cdn.modrinth.com/data/aXf2OSFU/e4eadd819f064a6c652313229b218fc207d6b805.png")
.add_version({ loader: ["quilt"], v: [18.2, 19, 20.1] }, { loader: ["fabric"], v: [15, 17, 18] })
.add_category("Utility", "Zoom")
.add_link(
	{ host: "modrinth", params: { namespace: NAMESPACE } },
	{ host: "curseforge", params: { namespace: NAMESPACE } },
	{ host: "github" }
);

await mod.import_versions_from_modrinth(NAMESPACE);

export default mod;
