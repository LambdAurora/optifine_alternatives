import Mod from "../build_logic/mod.ts";

const mod = new Mod(
	"Block Entity Extended Rendering",
	"jimbot6000",
	"Adds a slider to change the render distance for block entities.",
)
	.icon("https://cdn.modrinth.com/data/pW8yWsAv/icon.png")
	.add_version({ loader: ["fabric"], v: [18, 19, 19.1, 19.2, 19.3, 19.4, 20, 20.1] })
	.add_category("Cosmetic")
	.add_link(
		{ host: "modrinth", params: { namespace: "beer" } },
		{ host: "github" },
	);

await mod.import_versions_from_modrinth("beer");

export default mod;
