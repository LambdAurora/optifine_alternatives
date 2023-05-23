import Mod from "../build_src/mod.mjs";

export default new Mod(
	"Dynamic Lights",
	"atomicstrykergrumpy",
	"Portable and moving lightsources.",
)
.icon("https://media.forgecdn.net/avatars/14/504/635597643167221723.png")
.add_version({ loader: ["forge"], v: [6, 7, 8, 9, 10, 11, 12, 13, 16, 17, 18, 19.4] })
.add_category("Cosmetic")
.add_link(
	{ host: "curseforge" },
	{ host: "github", params: { author: "atomicstryker", namespace: "atomicstrykers-minecraft-mods" } }
);
