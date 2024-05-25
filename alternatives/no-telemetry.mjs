import Mod from "../build_src/mod.mjs";

const mod = new Mod(
	"No Telemetry",
	"kb1000",
	"No Telemetry is a mod that allows you to disable Microsofts data tracking which has been added in the snapshot 21w38a.",
)
.icon("https://cdn-raw.modrinth.com/data/hg77g4Pw/icon.png")
.add_category("Utility")
.add_link(
	{ host: "modrinth"},
	{ host: "curseforge"},
	{ host: "github", params: { author: "kb-1000" }  }
);

await mod.import_versions_from_modrinth("no-telemetry");

export default mod;
