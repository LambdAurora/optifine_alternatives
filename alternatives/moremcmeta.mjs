import Mod from "../build_src/mod.ts";

const mod = new Mod(
	"MoreMcmeta",
	"soir20",
	"Animate almost any Minecraft texture with more options.",
)
.icon("https://github.com/soir20/MoreMcmeta/blob/55da9f395bae741168a45ff876bace76b98297ec/fabric/src/main/resources/tricolor-zombie.png?raw=true")
.add_version({ loader: ["fabric", "quilt"], v: [17, 18, 19.1, 20.3, 20.4] }, { loader: ["forge"], v: [17, 18, 19.1, 20.3] })
.add_category("Cosmetic")
.add_link(
	{ host: "modrinth" },
	{ host: "curseforge", params: { namespace: "moremcmeta-fabric" } },
	{ host: "curseforge", params: { modloader: "Forge" } },
	{ host: "github" }
);

await mod.import_versions_from_modrinth();

export default mod;
