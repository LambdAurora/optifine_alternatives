import Mod from "../build_src/mod.mjs";

export default new Mod(
	"Dark Loading Screen",
	"Neecko5b84",
	"A simple mod to make the loading screen darker.",
)
.icon("https://github.com/A5b84/dark-loading-screen/blob/70e7f431c3c5b6d76a87769f84e590a940df2ef8/src/main/resources/assets/dark-loading-screen/icon.png?raw=true")
.add_version(15, 16, 17, 18)
.add_category("Cosmetic", "Splash Screen")
.add_link(
	{ host: "curseforge" },
	{ host: "github", params: { author: "A5b84" } }
);
