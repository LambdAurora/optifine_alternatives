import Mod from "../build_src/mod.ts";

const mod = new Mod(
	"Zoomify",
	"isXander",
	"A rather simple zoom mod with moderate customizability.",
)
.icon("https://cdn.modrinth.com/data/w7ThoJFB/25d48c335340c12566044c8f35df5102e72dc06c.png")
.add_version({ loader: ["fabric", "quilt"], v: [18.2, 19.3] })
.add_category("Utility", "Zoom")
.add_link(
	{ host: "modrinth" },
	{ host: "curseforge" },
	{ host: "github" }
);

await mod.import_versions_from_modrinth();

export default mod;
