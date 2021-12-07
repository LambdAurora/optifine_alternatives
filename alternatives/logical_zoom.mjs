import Mod from "../build_src/mod.mjs";

export default new Mod(
	"Logical Zoom",
	"LogicalGeekBoy",
	"Super simple zoom key for Minecraft.",
)
.add_version(15, 16, 17, 18)
.add_category("Utility", "Zoom")
.add_link(
	{ host: "curseforge", params: { namespace: "logical-zoom" } },
	{ host: "github" }
);
