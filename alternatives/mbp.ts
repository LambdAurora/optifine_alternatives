import Mod from "../build_logic/mod.ts";
import { UNMAINTAINED } from "../build_logic/status.ts";

const mod = new Mod(
	"More Block Predicates",
	"omoflop",
	"Allows resource packs to change block models depending on new conditions! Custom format.",
)
	.icon("https://cdn.modrinth.com/data/6Hwo44S4/icon.png")
	.add_version({ loader: ["fabric"], v: [17, 18, 19.2] })
	.add_category("Cosmetic")
	.add_link(
		{ host: "modrinth" },
		{ host: "github", params: { namespace: "moreblockpredicates" } },
	).set_status(UNMAINTAINED);

await mod.import_versions_from_modrinth("mbp");

export default mod;
