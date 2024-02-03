import Mod from "../build_src/mod.mjs";

const mod = new Mod(
	"Raised Clouds",
	"haykam",
	"Allows changing the height at which clouds appear.",
)
.icon("https://github.com/haykam821/Raised-Clouds/blob/master/src/main/resources/assets/raisedclouds/icon.png?raw=true", true)
.add_version({ loader: ["fabric", "quilt"], v: [16.2, 17, 18, 19.4] })
.add_category("Utility", "Cloud Height")
.add_link(
	{ host: "modrinth" },
	{ host: "curseforge" },
	{ host: "github", params: { author: "haykam821" } },
);

await mod.import_versions_from_modrinth("raised-clouds");

export default mod;
