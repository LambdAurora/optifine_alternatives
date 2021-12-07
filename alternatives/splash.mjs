import Mod from "../build_src/mod.mjs";

export default new Mod(
	"Splash",
	"LoganDark",
	"Splash is a Fabric mod that allows you to customize the colors of your splash screen.",
)
.add_version(16, 17)
.add_category("Cosmetic", "Splash Screen")
.add_link(
	{ host: "curseforge" },
	{ host: "github", params: { namespace: "fabric-splash" } }
);
