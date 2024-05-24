import Mod from "../build_src/mod.mjs";

const mod = new Mod(
	"Krypton",
	"astei",
	"A mod to optimize the Minecraft networking stack.",
)
.icon("https://cdn.modrinth.com/data/fQEb0iXm/icon.png")
.add_category("Performance", "General")
.add_link(
	{ host: "modrinth" },
	{ host: "curseforge" },
	{ host: "github" }
);

await mod.import_versions_from_modrinth();
mod.versions["quilt"] = mod.versions["fabric"];

export default mod;
