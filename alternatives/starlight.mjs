import Mod from "../build_src/mod.mjs";

const mod = new Mod(
	"Starlight",
	"PaperMC",
	"Rewrites the light engine to fix lighting performance and lighting errors. Uses a custom format for light storage. Incompatible with Phosphor.",
)
.icon("https://cdn.modrinth.com/data/H8CaAYZC/icon.png")
.add_version({ loader: ["fabric", "quilt", "forge"], v: [17, 18, 19, 20.4] })
.add_category("Performance", "General")
.add_link(
	{ host: "modrinth"},
	{ host: "modrinth", params: { namespace: "starlight-forge", modloader: "Forge" } },
	{ host: "curseforge"},
	{ host: "curseforge", params: { namespace: "starlight-forge", modloader: "Forge" } },
	{ host: "github" }
);

await Promise.all([
	mod.import_versions_from_modrinth(),
	mod.import_versions_from_modrinth("starlight-forge"),
]);

export default mod;
