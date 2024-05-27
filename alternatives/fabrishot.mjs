import Mod from "../build_src/mod.ts";

export default new Mod(
	"Fabrishot",
	"ramidzkh",
	"Take insanely large screenshots because why not?",
)
.icon("https://cdn.modrinth.com/data/3qsfQtE9/icon.png")
.add_version({ loader: ["fabric", "quilt"], v: [16, 17, 18, 19.4, 20.1] })
.add_category("Utility")
.add_link(
	{ host: "modrinth" },
	{ host: "curseforge" },
	{ host: "github" }
);
