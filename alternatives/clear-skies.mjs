import Mod from "../build_src/mod.mjs";

export default new Mod(
	"Clear Skies",
	"grondag",
	"Horizon and fog match the sky color. True blue skies!",
)
.add_version(15, 16, 17, {id: 16, note: "Forge"})
.add_category("Cosmetic")
.add_link(
	{ host: "curseforge" },
	{ host: "curseforge", params: { namespace: "clear-skies-forge-port", modloader: "Forge" } },
	{ host: "github" },
);
