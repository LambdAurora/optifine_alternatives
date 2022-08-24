import Mod from "../build_src/mod.mjs";

export default new Mod(
	"Custom GUI",
	"omoflop",
	"A mod allowing to animate GUI textures or replace container textures with minimal predicates.",
)
.icon("https://cdn.modrinth.com/data/cCkptEaQ/icon.png")
.add_version({ loader: ["fabric"], v: [16, 17] })
.add_category("Cosmetic")
.add_link(
	{ host: "modrinth" },
	{ host: "github" }
);
