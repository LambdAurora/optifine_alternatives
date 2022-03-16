import Mod from "../build_src/mod.mjs";

export default new Mod(
	"Quick Spyglasser",
	"Gluton",
	"Adds a client-side keybind for using a spyglass anywhere in your inventory.",
)
.icon("https://cdn.modrinth.com/data/w7ThoJFB/25d48c335340c12566044c8f35df5102e72dc06c.png")
.add_version(17)
.add_category("Utility", "Zoom")
.add_link(
	{ host: "curseforge" },
	{ host: "github", params: { author: "Gluton-Official", namespace: "QuickSpyglasser" } }
);
