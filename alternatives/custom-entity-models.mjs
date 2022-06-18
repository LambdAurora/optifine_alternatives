import Mod from "../build_src/mod.mjs";

export default new Mod(
	"Custom Entity Models (CEM)",
	"dorianpb",
	"An implementation of custom entity models heavily based off of Optifine's format that aims to achieve feature parity with Optifine's custom entity models."
)
.icon("https://github.com/dorianpb/cem/blob/edae70432cd0dc8b0248cbf13f85698d6848fe8f/src/main/resources/assets/cem/icon.png?raw=true")
.add_version({ loader: ["fabric", "quilt"], v: [16, 17, 18, 19] })
.add_category("Cosmetic")
.add_link(
	{ host: "curseforge", params: { namespace: "custom-entity-models-cem" } },
	{ host: "modrinth", params: { namespace: "cem" } },
	{ host: "github", params: { namespace: "cem" } }
);
