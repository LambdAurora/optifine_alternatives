import Mod from "../build_src/mod.ts";

const mod = new Mod(
	"FPS Reducer",
	"bre2el",
	"Improve performance when Minecraft is in the background, minimized or left inactive/idle for a while.",
)
.icon("https://media.forgecdn.net/avatars/127/648/636440915960912895.png")
.add_version(
	{ loader: ["fabric"], v: [16.5, 17, 18, 19.4, 20.4] },
	{ loader: ["quilt"], v: [19.4] },
	{ loader: ["forge"], v: [{ id: "1.7.10" }, 17, 18, 19.4] },
)
.add_category("Performance", "Client")
.add_link(
	{ host: "modrinth" },
	{ host: "curseforge" }
);

await mod.import_versions_from_modrinth("fps-reducer");
mod.versions["quilt"] = mod.versions["fabric"];

export default mod;
