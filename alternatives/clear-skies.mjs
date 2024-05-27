import Mod from "../build_src/mod.ts";

export default new Mod(
	"Clear Skies",
	"grondag",
	"Horizon and fog match the sky color. True blue skies!",
)
.icon("https://github.com/grondag/clear-skies/blob/1.18/common/src/clear-skies-400.png?raw=true")
.add_version({ loader: ["fabric", "quilt"], v: [15, 16, 17, 18, 19.3] }, {loader: ["forge"], v: [16, 17, 18, 19.3] })
.add_category("Cosmetic")
.add_link(
	{ host: "modrinth" },
	{ host: "curseforge" },
	{ host: "curseforge", params: { namespace: "clear-skies-forge-port", modloader: "Forge" } },
	{ host: "github" },
);
