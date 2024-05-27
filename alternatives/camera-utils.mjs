import Mod from "../build_src/mod.mjs";

const mod = new Mod(
	"Camera Utils",
	"henkelmax",
	"Additional features concerning the player's camera.",
)
.icon("https://cdn.modrinth.com/data/rrwQMaWQ/00f30d85352fdbbc34354a550b24ee153848800f.png")
.add_version({ loader: ["fabric", "quilt"], v: [17, 18, 19, 19.1, 19.3, 20.3] })
.add_category("Utility", "Zoom")
.add_link(
	{ host: "modrinth"},
	{ host: "curseforge", params: { namespace: "camera-utils" } },
	{ host: "github" }
);

await mod.import_versions_from_modrinth("camera-utils");

export default mod;
