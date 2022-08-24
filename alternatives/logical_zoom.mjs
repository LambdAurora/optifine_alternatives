import Mod from "../build_src/mod.mjs";

export default new Mod(
	"Logical Zoom",
	"LogicalGeekBoy",
	"Super simple zoom key for Minecraft.",
)
.icon("https://github.com/LogicalGeekBoy/logical_zoom/blob/master/src/main/resources/assets/logical_zoom/icon.png?raw=true")
.add_version({ loader: ["fabric", "quilt"], v: [15, 16, 17, 18, 19] })
.add_category("Utility", "Zoom")
.add_link(
	{ host: "modrinth", params: { namespace: "logical-zoom" } },
	{ host: "curseforge", params: { namespace: "logical-zoom" } },
	{ host: "github" }
);
