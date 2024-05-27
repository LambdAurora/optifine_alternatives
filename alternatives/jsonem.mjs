import Mod from "../build_src/mod.ts";

const mod = new Mod(
	"JsonEM (Json Entity Models)",
	"FoundationGames",
	"Data driven entity model library, should work with most entities. Does not support OptiFine's format.",
)
.icon("https://cdn.modrinth.com/data/fumdX4iT/icon.png")
.add_category("Cosmetic")
.add_link(
	{ host: "modrinth" },
	{ host: "github" }
);

await mod.import_versions_from_modrinth("jsonem");

export default mod;
