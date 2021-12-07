import Mod from "../build_src/mod.mjs";

export default new Mod(
	"LambDynamicLights",
	"LambdAurora",
	"Adds dynamic lighting to the game.",
)
.add_version(15, 16, 17, 18)
.add_category("Cosmetic")
.add_link(
	{ host: "curseforge" },
	{ host: "modrinth" },
	{ host: "github" }
);
