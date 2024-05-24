import Mod from "../build_src/mod.mjs";

const mod = new Mod(
	"OptiGUI",
	"opekope2",
	"Custom inventory GUIs on Fabric&Quilt with OptiFine resource pack support&many more features",
)
.icon("https://cdn-raw.modrinth.com/data/JuksLGBQ/2ec739011e612256ebe0c79a4ce064d0e453dd0f.png")
.add_version({ loader: ["fabric", "quilt"], v: [18, 19, 20.1] })
.add_category("Cosmetic")
.add_link(
	{ host: "modrinth" },
	{ host: "curseforge" },
	{ host: "github" }
);

await mod.import_versions_from_modrinth();

export default mod;
