import Mod from "../build_src/mod.mjs";

export default new Mod(
	"Entity Model Features",
	"Traben",
	"A Fabric mod implementing support for OptiFine-format custom entity model (CEM) resourcepacks. Fully compatible with Sodium & Fresh Animations.",
)
.icon("https://cdn-raw.modrinth.com/data/4I1XuqiY/851d67f28abc1ed5826acd548e554d5cd4afb838.png")
.add_version({ loader: ["quilt"], v: [ 19.4] }, { loader: ["fabric", "forge"], v: [ 19.4] })
.add_category("Cosmetic")
.add_link(
	{ host: "modrinth", params: { namespace: "entity-model-features" } },
	{ host: "curseforge", params: { namespace: "entity-model-features" } },
	{ host: "github", params: { author: "Traben-0", namespace: "Entity_Model_Features" } }
);
