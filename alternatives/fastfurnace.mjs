import Mod from "../build_src/mod.mjs";

export default new Mod(
	"FastFurnace",
	"Shadows_of_Fire",
	"Improves TPS performance of the furnace, blast furnace and smoker by caching the last result.",
)
.icon("https://media.forgecdn.net/avatars/164/243/636686097562167838.png")
.add_version({ loader: ["forge"], v: [12.2, 14, 15, 16, 17, 18, 19.2] })
.add_category("Performance")
.add_link(
	{ host: "curseforge" },
	{ host: "github", params: { author: "Shadows-of-Fire", namespace: "FastFurnace" } }
);
