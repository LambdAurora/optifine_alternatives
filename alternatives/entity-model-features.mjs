import Mod from "../build_src/mod.ts";

const NAMESPACE = "entity-model-features";

const mod = new Mod(
	"Entity Model Features",
	"Traben",
	"A Fabric mod implementing support for OptiFine-format custom entity model (CEM) resourcepacks. Fully compatible with Sodium & Fresh Animations.",
)
.icon("https://cdn.modrinth.com/data/4I1XuqiY/7a6acd528931a1a0d1b60fd0925b88227fb345cc.png")
.add_version({ loader: ["quilt"], v: [ 19.4] }, { loader: ["fabric", "forge"], v: [ 19.4] })
.add_category("Cosmetic")
.add_link(
	{ host: "modrinth", params: { namespace: NAMESPACE } },
	{ host: "curseforge", params: { namespace: NAMESPACE } },
	{ host: "github", params: { author: "Traben-0", namespace: "Entity_Model_Features" } }
);

await mod.import_versions_from_modrinth(NAMESPACE);

export default mod;
