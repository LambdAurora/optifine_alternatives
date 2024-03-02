import Mod from "../build_src/mod.mjs";

export default new Mod(
	"FastBench for Fabric",
	"tfarecnim, Shadows_of_Fire",
	"Improves performance of all crafting-related functions by caching the last recipe used. A Fabric port of FastWorkbench by Shadows_of_Fire.",
)
.icon("https://media.forgecdn.net/avatars/251/252/637182557495849011.png")
.add_version({ loader: ["fabric"], v: [15, 16, 17, 18.1] })
.add_category("Performance")
.add_link(
	{ host: "curseforge" },
	{ host: "github", params: { author: "Tfarcenim", namespace: "FabricFastBench" } }
);
