import Mod from "../build_src/mod.mjs";

export default new Mod(
	"Continuity",
	"PepperCode1",
	"A Fabric mod that allows for efficient connected textures.",
)
.icon("https://cdn.modrinth.com/data/1IjD5062/icon.png")
.add_version(17, 18)
.add_category("Cosmetic")
.add_link(
	{ host: "curseforge" },
	{ host: "modrinth" },
	{ host: "github" }
)
.requires("frapi");
