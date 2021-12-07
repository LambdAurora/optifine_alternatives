import Mod from "../build_src/mod.mjs";

export default new Mod(
	"Iris",
	"IrisShaders",
	"A new shaders mod for Minecraft intended to be compatible with existing ShadersMod/Optifine shaders.",
)
.add_version(16, 17, 18)
.add_category("Shaders")
.add_link(
	{ host: "curseforge", params: { namespace: "irisshaders" } },
	{ host: "modrinth" },
	{ host: "github" },
);
