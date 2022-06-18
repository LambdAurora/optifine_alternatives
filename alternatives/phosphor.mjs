import Mod from "../build_src/mod.mjs";

export default new Mod(
	"Phosphor",
	"CaffeineMC",
	"No-compromises lighting engine optimization mod. Incompatible with Starlight.",
)
.icon("https://cdn.modrinth.com/data/hEOCdOgW/icon.png")
.add_version({ loader: ["fabric", "quilt"], v: [15, 16, 17, 18, 19] })
.add_category("Performance", "General")
.add_link(
	{ host: "modrinth" },
	{ host: "curseforge" },
	{ host: "github", params: { namespace: "phosphor-fabric" } }
);
