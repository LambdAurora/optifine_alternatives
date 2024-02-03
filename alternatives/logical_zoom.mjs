import Mod from "../build_src/mod.mjs";

const NAMESPACE = "logical-zoom";

const mod = new Mod(
	"Logical Zoom",
	"LogicalGeekBoy",
	"Super simple zoom key for Minecraft.",
)
.icon("https://github.com/LogicalGeekBoy/logical_zoom/blob/master/src/main/resources/assets/logical_zoom/icon.png?raw=true")
.add_version({ loader: ["fabric", "quilt"], v: [15, 16, 17, 18.2, 19.3, 20.3, 20.4] })
.add_category("Utility", "Zoom")
.add_link(
	{ host: "modrinth", params: { namespace: NAMESPACE } },
	{ host: "curseforge", params: { namespace: NAMESPACE } },
	{ host: "github" }
);

await mod.import_versions_from_modrinth(NAMESPACE);

export default mod;
