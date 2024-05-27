import Mod from "../build_src/mod.ts";

const mod = new Mod(
	"Custom Fog",
	"Setadokalo",
	"A mod allowing you to customize the appearance of fog in your world.",
)
.icon("https://cdn.modrinth.com/data/2JyZgJxC/icon.png")
.add_version({ loader: ["fabric", "quilt"], v: [15, 16, 17, 18, 19, 20.4] })
.add_category("Fog")
.add_link(
	{ host: "modrinth" },
	{ host: "curseforge" },
	{ host: "github" }
);

await mod.import_versions_from_modrinth("custom-fog");

export default mod;
