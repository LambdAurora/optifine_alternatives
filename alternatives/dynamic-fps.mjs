import Mod from "../build_src/mod.mjs";

export default new Mod(
	"Dynamic FPS",
	"juliand665",
	"Improve performance when Minecraft is in the background.",
)
.icon("https://cdn.modrinth.com/data/LQ3K71Q1/icon.png")
.add_version({ loader: ["quilt"], v: [18, 19.4] }, { loader: ["fabric"], v: [14, 15, 16, 17, 18, 19.4] })
.add_category("Performance", "Client")
.add_link(
	{ host: "modrinth" },
	{ host: "curseforge" },
	{ host: "github" }
);
