import Mod from "../build_src/mod.mjs";

export default new Mod(
	"Clear Skies",
	"grondag",
	"Horizon and fog match the sky color. True blue skies!",
)
.icon("https://github.com/grondag/clear-skies/blob/1.18/common/src/clear-skies-400.png?raw=true")
.add_version(15, 16, 17, 18, {id: 16, note: "Forge"})
.add_category("Cosmetic")
.add_link(
	{ host: "curseforge" },
	{ host: "curseforge", params: { namespace: "clear-skies-forge-port", modloader: "Forge" } },
	{ host: "github" },
);
