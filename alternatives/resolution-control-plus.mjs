import Mod from "../build_src/mod.mjs";

const mod = new Mod(
	"ResolutionControl+",
	"UltimateBoomer",
	"Allows you to set render resolutions and take large screenshots.",
)
.icon("https://cdn.modrinth.com/data/rqTgDmc8/icon.png")
.add_category("Utility")
.add_link(
	{ host: "modrinth" },
	{ host: "github", params: { namespace: "resolution-control" } }
);

await mod.import_versions_from_modrinth("resolution-control-plus");

export default mod;
