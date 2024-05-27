import Mod from "../build_src/mod.ts";

const mod = new Mod(
	"LambDynamicLights",
	"LambdAurora",
	"Adds dynamic lighting to the game.",
)
.icon("https://cdn.modrinth.com/data/yBW8D80W/icon.png")
.add_version({ loader: ["quilt"], v: [17, 18, 19, 20.2] }, { loader: ["fabric"], v: [15, 16.1, 17, 18, 19, 20.2] })
.add_category("Cosmetic")
.add_link(
	{ host: "modrinth" },
	{ host: "curseforge" },
	{ host: "github" }
);

await mod.import_versions_from_modrinth();

export default mod;
