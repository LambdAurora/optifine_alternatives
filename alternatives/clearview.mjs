import Mod from "../build_src/mod.mjs";

export default new Mod(
	"ClearView",
	"tfarecnim",
	"Controls which kinds of fogs are shown.",
)
.add_version({ loader: ["fabric"], v: [15, 16] })
.add_category("Fog")
.add_link(
	{ host: "curseforge" }
);
