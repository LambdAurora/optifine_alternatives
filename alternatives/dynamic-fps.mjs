import Mod from "../build_src/mod.mjs";

const mod = new Mod(
	"Dynamic FPS",
	"juliand665, LostLuma",
	"Reduce resource usage while Minecraft is in the background or idle.",
)
.icon("https://cdn.modrinth.com/data/LQ3K71Q1/icon.png")
// Some early 1.14.x and 1.16.x Fabric / Quilt versions are only available on GitHub and CurseForge, so the import doesn't catch them
.add_version({ loader: ["fabric", "quilt"], v: [14, 14.1, 14.2, 15, 16, 16.1, 17, 18, 19, 20] }, { loader: ["forge"], v: [16.5, 17, 18, 19, 20] }, { loader: ["neoforge"], v: [20.2, 20.3, 20.4] })
.add_category("Performance", "Client")
.add_link(
	{ host: "modrinth" },
	{ host: "curseforge" },
	{ host: "github", params: { author: "juliand665" } }
);

await mod.import_versions_from_modrinth("dynamic-fps");

export default mod;
