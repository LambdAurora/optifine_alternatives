import Mod from "../build_src/mod.mjs";

export default new Mod(
	"Camera Utils",
	"henkelmax",
	"Additional features concerning the player's camera.",
)
.icon("https://modrepo.de/_nuxt/img/logo_camerautils.af23b21.png")
.add_version({ loader: ["fabric", "quilt"], v: [17, 18, 19] })
.add_category("Utility", "Zoom")
.add_link(
	{ host: "curseforge", params: { namespace: "camera-utils" } }
);
