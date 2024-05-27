import Mod from "../build_src/mod.ts";

export default new Mod(
	"Splash",
	"LoganDark",
	"Splash is a Fabric mod that allows you to customize the colors of your splash screen.",
)
.icon("https://github.com/LoganDark/fabric-splash/blob/77237d4aa2297566c6d6b47583a2bf530ef0bd01/src/main/resources/assets/splash/icon.png?raw=true")
.add_version({ loader: ["fabric"], v: [16, 17] })
.add_category("Cosmetic", "Splash Screen")
.add_link(
	{ host: "curseforge" },
	{ host: "github", params: { namespace: "fabric-splash" } }
);
