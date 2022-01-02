import Mod from "../build_src/mod.mjs";

export default new Mod(
	"More Block Predicates",
	"omoflop",
	"Allows resource packs to change block models depending on new conditions! Custom format.",
)
.add_version(17)
.add_category("Cosmetic")
.add_link(
	{ host: "modrinth" },
	{ host: "github", params: { namespace: "moreblockpredicates" } }
);
