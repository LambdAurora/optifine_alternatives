import Mod from "../build_src/mod.ts";

export default new Mod(
	"ClearView",
	"tfarecnim",
	"Controls which kinds of fogs are shown.",
)
.icon("https://media.forgecdn.net/avatars/267/368/637235350733278171.png")
.add_version({ loader: ["fabric"], v: [15, 16] })
.add_category("Fog")
.add_link(
	{ host: "curseforge" }
);
