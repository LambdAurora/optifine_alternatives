import Mod from "../build_src/mod.mjs";

const mod = new Mod(
	"Embeddium",
	"embeddedt",
	"A performance-enhancing client mod (based on Sodium) prioritizing reliability & mod compatibility",
)
.icon("https://cdn.modrinth.com/data/sk9rgfiA/7f5be8843494e3c34bd628143cbb07bc6cbc77f7.png")
.add_version({ loader: ["fabric", "quilt"], v: [20.1, 20.4] }, { loader: ["forge"], v: [16.5, 18.2, 19.2, 20] }, { loader: ["neoforge"], v: [20] }
.add_category("Performance", "Client")
.add_link(
	{ host: "modrinth" },
	{ host: "curseforge" },
	{ host: "github" }
);

await mod.import_versions_from_modrinth("embeddium");

export default mod;
