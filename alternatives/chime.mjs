import Mod from "../build_src/mod.mjs";

const mod = new Mod(
	"Chime",
	"Emi",
	"Adds predicates for more interactive item models, CIT replacement with a custom format.",
)
.icon("https://cdn.modrinth.com/data/ubxU84eR/icon.png")
.add_version({ loader: ["fabric"], v: [16.4] }, { loader: ["fabric", "quilt"], v: [18, 19.3] })
.add_category("Cosmetic")
.add_link(
	{ host: "modrinth" },
	{ host: "curseforge", params: { namespace: "chime-fabric" } },
	{ host: "github", params: { author: "emilyploszaj" } }
);

await mod.import_versions_from_modrinth();

export default mod;
