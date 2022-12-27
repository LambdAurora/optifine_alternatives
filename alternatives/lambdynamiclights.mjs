import Mod from "../build_src/mod.mjs";

export default new Mod(
	"LambDynamicLights",
	"LambdAurora",
	"Adds dynamic lighting to the game.",
)
.icon("https://cdn.modrinth.com/data/yBW8D80W/icon.png")
.add_version({ loader: ["quilt"], v: [17, 18, 19.3] }, { loader: ["fabric"], v: [15, 16, 17, 18, 19.3] })
.add_category("Cosmetic")
.add_link(
	{ host: "modrinth" },
	{ host: "curseforge" },
	{ host: "github" }
);
