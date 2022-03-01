import Mod from "../build_src/mod.mjs";

export default new Mod(
	"ResolutionControl+",
	"UltimateBoomer",
	"Allows you to set render resolutions and take large screenshots.",
)
.icon("https://cdn.modrinth.com/data/rqTgDmc8/icon.png")
.add_version(16)
.add_category("Utility")
.add_link(
	{ host: "modrinth" },
	{ host: "github", params: { namespace: "resolution-control" } }
);
