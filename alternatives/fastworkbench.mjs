import Mod from "../build_src/mod.mjs";

export default new Mod(
	"FastWorkbench",
	"Shadows_of_Fire",
	"Improves performance of all crafting-related functions by caching the last recipe used. Note: Unrelated to performance, it also hides the recipe book by default - this can be undone in the config.",
)
.icon("https://media.forgecdn.net/avatars/164/244/636686097718417988.png")
.add_version({ loader: ["forge"], v: [12.2, 14, 15, 16, 17, 18, 19.2] })
.add_category("Performance")
.add_link(
	{ host: "curseforge" },
	{ host: "github", params: { author: "Shadows-of-Fire", namespace: "FastWorkbench" } }
);
