import Mod from "../build_src/mod.mjs";

export default new Mod(
	"Iris",
	"IrisShaders",
	"A new shaders mod for Minecraft intended to be compatible with existing ShadersMod/Optifine shaders.",
)
.icon("https://cdn.modrinth.com/data/YL57xq9U/dc558eece920db435f9823ce86de0c4cde89800b.png")
.add_version({ loader: ["quilt"], v: [18, 19.3] }, { loader: ["fabric"], v: [16, 17, 18, 19.3] })
.add_category("Shaders")
.add_link(
	{ host: "modrinth" },
	{ host: "curseforge", params: { namespace: "irisshaders" } },
	{ host: "github" },
);
