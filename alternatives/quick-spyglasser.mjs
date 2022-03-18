import Mod from "../build_src/mod.mjs";

export default new Mod(
	"Quick Spyglasser",
	"Gluton",
	"Adds a client-side keybind for using a spyglass anywhere in your inventory.",
)
.icon("https://media.forgecdn.net/avatars/thumbnails/395/489/64/64/637593852239594205.png", true)
.add_version(17)
.add_category("Utility", "Zoom")
.add_link(
	{ host: "curseforge" },
	{ host: "github", params: { author: "Gluton-Official", namespace: "QuickSpyglasser" } }
);
