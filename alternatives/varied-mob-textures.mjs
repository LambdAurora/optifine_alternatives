import Mod from "../build_src/mod.mjs";

export default new Mod(
	"Varied Mob Textures",
	"digifox03",
	"This mod allows the resource packs creator to have multiple randomized textures for the same mob. Uses custom format, OptiFine-based resource packs will need conversion.",
)
.add_version(16)
.add_category("Cosmetic")
.add_link(
	{ host: "curseforge" },
	{ host: "github", params: { namespace: "variedMobs" } },
);
