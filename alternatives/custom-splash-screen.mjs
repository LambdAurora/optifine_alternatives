import Mod from "../build_src/mod.mjs";

export default new Mod(
	"Custom Splash Screen",
	"TeamMidnightDust",
	"Change Minecraft's loading screen to your liking! Completely configurable!",
)
.icon("https://cdn.modrinth.com/data/BwFQLeCh/icon.png")
.add_version({ loader: ["fabric", "quilt"], v: [16, 17, 18] })
.add_category("Cosmetic", "Splash Screen")
.add_link(
	{ host: "curseforge" },
	{ host: "modrinth" },
	{ host: "github", params: { namespace: "CustomSplashScreen" } }
);
