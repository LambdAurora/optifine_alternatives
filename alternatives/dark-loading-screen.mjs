import Mod from "../build_src/mod.ts";

const mod = new Mod(
	"Dark Loading Screen",
	"A5b84",
	"A simple mod to make the loading screen darker.",
)
.icon("https://github.com/A5b84/dark-loading-screen/blob/70e7f431c3c5b6d76a87769f84e590a940df2ef8/src/main/resources/assets/dark-loading-screen/icon.png?raw=true", true)
.add_version({ loader: ["quilt"], v: [18, 19.3] }, { loader: ["fabric"], v: [15, 16, 17, 18, 19.3] })
.add_category("Cosmetic", "Splash Screen")
.add_link(
	{ host: "modrinth" },
	{ host: "curseforge" },
	{ host: "github", params: { author: "A5b84" } }
);

await mod.import_versions_from_modrinth("dark-loading-screen");

export default mod;
