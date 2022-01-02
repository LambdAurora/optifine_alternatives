import Mod from "../build_src/mod.mjs";

export default new Mod(
	"JsonEM (Json Entity Models)",
	"FoundationGames",
	"Data driven entity model library, should work with most entities. Does not support OptiFine's format.",
)
.add_version(18)
.add_category("Cosmetic")
.add_link(
	{ host: "modrinth" },
	{ host: "github" }
);
