import Mod from "../build_src/mod.mjs";

export default new Mod(
	"Transparent",
	"Trikzon",
	"Allows resource packs to make entities support transparency.",
)
.add_version(15, 16, 17, 18)
.add_category("Cosmetic")
.add_link(
	{ host: "curseforge", params: { namespace: "transparent-fabric" } },
	{ host: "curseforge", params: { namespace: "transparent-forge", note: "Forge" } },
	{ host: "github" }
);
