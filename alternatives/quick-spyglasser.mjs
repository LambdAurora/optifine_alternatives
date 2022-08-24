import Mod from "../build_src/mod.mjs";

export default new Mod(
	"Quick Spyglasser",
	"Gluton",
	"Adds a client-side keybind for using a spyglass anywhere in your inventory.",
)
.icon("https://i.imgur.com/vCWHvTs.png", true)
.add_version({ loader: ["fabric"], v: [17] })
.add_category("Utility", "Zoom")
.add_link(
	{ host: "curseforge" },
	{ host: "github", params: { author: "Gluton-Official", namespace: "QuickSpyglasser" } }
);
