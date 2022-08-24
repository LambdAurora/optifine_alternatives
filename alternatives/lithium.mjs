import Mod from "../build_src/mod.mjs";

export default new Mod(
	"Lithium",
	"CaffeineMC",
	"No-compromises game logic/server optimization mod.",
)
.icon("https://cdn.modrinth.com/data/gvQqBUqZ/icon.png")
.add_version({ loader: ["fabric", "quilt"], v: [15, 16, 17, 18, 19] })
.add_category("Performance", "General")
.add_link(
	{ host: "modrinth" },
	{ host: "curseforge" },
	{ host: "github", params: { namespace: "lithium-fabric" } }
);
