import Mod from "../build_src/mod.mjs";

const mod = new Mod(
	"Quilt Loading Screen",
	"hibi, triphora (previous maintainer), darkerbit (original author)",
	"A loading screen based off of The Quilt Community's server banner.",
)
.icon("https://cdn.modrinth.com/data/VPU6VYVP/icon.png")
.add_version({ loader: ["quilt"], v: [18.2, 19.3] }, { loader: ["fabric"], v: [16.5, 17, 18.2] })
.add_category("Cosmetic", "Splash Screen")
.add_link(
	{ host: "modrinth" },
	{ host: "github", params: { author: "emmods" } }
);

await mod.import_versions_from_modrinth("quilt-loading-screen");

export default mod;
