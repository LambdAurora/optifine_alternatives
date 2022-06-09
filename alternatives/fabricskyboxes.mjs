import Mod from "../build_src/mod.mjs";

export default new Mod(
	"FabricSkyboxes",
	"AMereBagatelle",
	"Allows resource packs to define custom skyboxes. OptiFine format is not compatible by default, converters are available.",
)
.icon("https://cdn.modrinth.com/data/YBz7DOs8/icon.png")
.add_version({ loader: ["fabric", "quilt"], v: [16, 17, 18, 19] })
.add_category("Cosmetic")
.add_link(
	{ host: "modrinth" },
	{ host: "curseforge" },
	{ host: "github" }
);
