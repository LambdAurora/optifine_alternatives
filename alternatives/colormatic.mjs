import Mod from "../build_src/mod.mjs";

export default new Mod(
	"Colormatic",
	"kvverti",
	"An independent implementation of the custom colors mod for Minecraft.",
)
.icon("https://cdn.modrinth.com//data/V4IQxkZC/icon.png")
.add_version({ loader: ["quilt"], v: [19] }, { loader: ["fabric"], v: [14, 15, 16, 17, 18, 19] })
.add_category("Cosmetic")
.add_link(
	{ host: "modrinth" },
	{ host: "curseforge" },
	{ host: "github" }
);
