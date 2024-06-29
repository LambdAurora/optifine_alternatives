import Mod from "../build_src/mod.ts";

const mod = new Mod(
	"Iris",
	"IrisShaders",
	"A new shaders mod for Minecraft intended to be compatible with existing ShadersMod/Optifine shaders.",
)
.icon("https://cdn.modrinth.com/data/YL57xq9U/dc558eece920db435f9823ce86de0c4cde89800b.png")
.add_version({ loader: ["fabric"], v: [16.5, 17, 18.2, 19, 20.2] }, { loader: ["quilt"], v: [18.2, 19, 20.2] })
.add_category("Shaders")
.add_link(
	{ host: "modrinth" },
	{ host: "curseforge", params: { namespace: "irisshaders" } },
	{ host: "github" },
);

await mod.import_versions_from_modrinth();

export default mod;
