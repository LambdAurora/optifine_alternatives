import Mod from "../build_logic/mod.ts";
import { UNMAINTAINED } from "../build_logic/status.ts";

const mod = new Mod(
	"Fog Control",
	"capnkork",
	"Allows the user to adjust the (client) distance at which fogs render or disable them completely. ",
)
	.icon("https://cdn.modrinth.com/data/StFP8sqm/icon.jpg")
	.add_category("Fog")
	.add_link(
		{ host: "modrinth" },
		{ host: "github" },
	).set_status(UNMAINTAINED);

await mod.import_versions_from_modrinth("fog-control");

export default mod;
