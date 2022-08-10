import Mod from "../build_src/mod.mjs";

export default new Mod(
	"Raised Clouds",
	"haykam",
	"Allows changing the height at which clouds appear.",
)
.icon("https://github.com/haykam821/Raised-Clouds/blob/master/src/main/resources/assets/raisedclouds/icon.png?raw=true", true)
.add_version({ loader: ["fabric", "quilt"], v: [16, 17, 18, 19] })
.add_category("Utility", "Cloud Height")
.add_link(
	{ host: "curseforge" },
	{ host: "github", params: { author: "haykam821" } },
);
