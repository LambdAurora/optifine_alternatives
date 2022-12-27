import Mod from "../build_src/mod.mjs";

export default new Mod(
	"Transparent",
	"Trikzon",
	"Allows resource packs to make entities support transparency.",
)
.icon("https://github.com/Trikzon/transparent/blob/401585c760bf77228e8ef175b2847951ea59a7ac/fabric/src/main/resources/assets/transparent/icon.png?raw=true")
.add_version({ loader: ["fabric", "quilt", "forge"], v: [15, 16, 17, 18, 19.3] })
.add_category("Cosmetic")
.add_link(
	{ host: "modrinth" },
	{ host: "curseforge", params: { namespace: "transparent-fabric" } },
	{ host: "curseforge", params: { namespace: "transparent-forge", modloader: "Forge" } },
	{ host: "github" }
);
