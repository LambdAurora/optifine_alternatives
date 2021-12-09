import Mod from "../build_src/mod.mjs";

export default new Mod(
	"Custom Entity Models (CEM)",
	"dorianpb",
	"An implementation of custom entity models heavily based off of Optifine's format that aims to achieve feature parity with Optifine's custom entity models."
)
.add_version(16, 17)
.add_category("Cosmetic")
.add_link(
	{ host: "cursforge", params: { namespace: "custom-entity-models-cem" } },
	{ host: "github", params: { namespace: "cem" } }
);
