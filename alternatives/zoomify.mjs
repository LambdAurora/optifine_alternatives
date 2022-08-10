import Mod from "../build_src/mod.mjs";

export default new Mod(
	"Zoomify",
	"isXander",
	"A rather simple zoom mod with moderate customizability.",
)
.icon("https://cdn.modrinth.com/data/w7ThoJFB/25d48c335340c12566044c8f35df5102e72dc06c.png")
.add_version({ loader: ["fabric", "quilt"], v: [18, 19] })
.add_category("Utility", "Zoom")
.add_link(
	{ host: "modrinth" },
	{ host: "curseforge" },
	{ host: "github" }
);
