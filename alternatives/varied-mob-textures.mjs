import Mod from "../build_src/mod.mjs";

export default new Mod(
	"Varied Mob Textures",
	"digifox03",
	"This mod allows the resource packs creator to have multiple randomized textures for the same mob. Uses custom format, OptiFine-based resource packs will need conversion.",
)
.icon("https://github.com/Digifox03/variedMobs/blob/3eebb799729df369c27aa64bbc4f6a2dd1acb6b9/src/main/resources/assets/varied-mobs/icon.png?raw=true")
.add_version({ id: 16, loader: ["fabric"] })
.add_category("Cosmetic")
.add_link(
	{ host: "curseforge" },
	{ host: "github", params: { namespace: "variedMobs" } },
);
