import Mod from "../build_src/mod.ts";

export default new Mod(
	"Soaring Clouds",
	"Draylar",
	"Allows changing the height at which clouds appear.",
)
.icon("https://github.com/omega-mc/soaring-clouds/blob/1.16/src/main/resources/assets/soaring-clouds/icon.png?raw=true")
.add_version({ loader: ["fabric"], v: [15, 16] })
.add_category("Utility", "Cloud Height")
.add_link(
	{ host: "curseforge" },
	{ host: "github", params: { author: "omega-mc" } },
);
