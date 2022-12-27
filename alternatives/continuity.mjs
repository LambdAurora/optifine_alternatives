import Mod from "../build_src/mod.mjs";

export default new Mod(
	"Continuity",
	"PepperCode1",
	"A Fabric mod that allows for efficient connected textures. Support emissive textures.",
)
.icon("https://cdn.modrinth.com/data/1IjD5062/icon.png")
.add_version({ loader: ["fabric", "quilt"], v: [17, 18, 19.2] })
.add_category("Cosmetic")
.add_link(
	{ host: "modrinth" },
	{ host: "curseforge" },
	{ host: "github" }
)
.requires("frapi");
