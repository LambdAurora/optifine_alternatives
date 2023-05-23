import Mod from "../build_src/mod.mjs";

export default new Mod(
	"Fast Furnace for Fabric",
	"tfarecnim, Shadows_of_Fire",
	"Improves TPS performance of the furnace, blast furnace and smoker by caching the last result. A Fabric port of FastFurnace by Shadows_of_Fire.",
)
.icon("https://media.forgecdn.net/avatars/251/264/637182590852864914.png")
.add_version({ loader: ["fabric"], v: [115, 16, 17, 18, 19.2] })
.add_category("Performance")
.add_link(
	{ host: "curseforge" },
	{ host: "github", params: { author: "Tfarcenim", namespace: "FabricFastFurnace" } }
);
