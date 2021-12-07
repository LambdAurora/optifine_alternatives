import Mod from "../build_src/mod.mjs";

export default new Mod(
	"Quilt Loading Screen",
	"wafflecoffe, darkerbit (previously)",
	"A loading screen based off of The Quilt Community's server banner.",
)
.add_version(16, 17, 18)
.add_category("Cosmetic", "Splash Screen")
.add_link(
	{ host: "modrinth" },
	{ host: "curseforge" },
	{ host: "github", params: { author: "wafflecoffee" } }
);
