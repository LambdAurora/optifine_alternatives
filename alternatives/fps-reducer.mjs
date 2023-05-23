import Mod from "../build_src/mod.mjs";

export default new Mod(
	"FPS Reducer",
	"bre2el",
	"Improve performance when Minecraft is in the background, minimized or left inactive/idle for a while.",
)
.icon("https://media.forgecdn.net/avatars/127/648/636440915960912895.png")
.add_version(
	{ loader: ["forge"], v: [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19.4] },
	{ loader: ["fabric"], v: [16.5, 17, 18, 19.4] },
	{ loader: ["quilt"], v: [19.4] },
)
.add_category("Performance", "Client")
.add_link(
	{ host: "curseforge" }
);
