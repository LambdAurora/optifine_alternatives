import Mod from "../build_src/mod.mjs";

export default new Mod(
	"Entity Texture Features",
	"Traben_0",
	"A Fabric mod implementing randomized & emissive texture support for mobs set by the resourcepack. Fully compatible with the optifine format.",
)
.add_version(16, 17, 18)
.add_category("Cosmetic")
.add_link(
	{ host: "curseforge", params: { namespace: "entity-texture-features-fabric" } },
  { host: "modrinth" },
	{ host: "github" }
);
