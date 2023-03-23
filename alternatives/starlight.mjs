import Mod from "../build_src/mod.mjs";

export default new Mod(
	"Starlight",
	"PaperMC",
	"Rewrites the light engine to fix lighting performance and lighting errors. Uses a custom format for light storage. Incompatible with Phosphor.",
)
.icon("https://cdn.modrinth.com/data/H8CaAYZC/icon.png")
.add_version({ loader: ["fabric", "quilt", "forge"], v: [17, 18, 19.4] })
.add_category("Performance", "General")
.add_link(
	{ host: "modrinth"},
	{ host: "modrinth", params: { namespace: "starlight-forge", modloader: "Forge" } },
	{ host: "curseforge"},
	{ host: "curseforge", params: { namespace: "starlight-forge", modloader: "Forge" } },
	{ host: "github" }
);
