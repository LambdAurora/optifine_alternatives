import Mod from "../build_src/mod.mjs";

export default new Mod(
	"Entity Texture Features",
	"Traben",
	"A Fabric mod implementing randomized & emissive texture support for mobs set by the resourcepack. Fully compatible with the Optifine format & Sodium.",
)
.icon("https://cdn-raw.modrinth.com//data/BVzZfTc1/8652b3d18c262b33e0cf194d402977897267573a.png")
.add_version({ loader: ["quilt"], v: [18, 19] }, { loader: ["fabric", "forge"], v: [16, 17, 18, 19] })
.add_category("Cosmetic")
.add_link(
	{ host: "modrinth", params: { namespace: "entitytexturefeatures" } },
	{ host: "curseforge", params: { namespace: "entity-texture-features-fabric" } },
	{ host: "github", params: { author: "Traben-0", namespace: "Entity_Texture_Features" } }
);
