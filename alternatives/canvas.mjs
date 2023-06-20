import Mod from "../build_src/mod.mjs";

export default new Mod(
	"Canvas Renderer",
	"vram-guild",
	"A new rendering engine. Incompatible with Sodium.",
)
.icon("https://cdn.modrinth.com/data/VOYxIjFI/icon.jpg")
.add_version({ loader: ["fabric", "quilt"], v: [17, 18, 19, 20.1] }, {loader: ["fabric"], v: [16], note: "Abandoned"})
.add_category("Shaders")
.add_link(
	{ host: "modrinth" },
	{ host: "curseforge", params: { namespace: "canvas-renderer" } },
	{ host: "github" }
)
.provides("frapi");
