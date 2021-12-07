import Mod from "../build_src/mod.mjs";

export default new Mod(
	"Lithium",
	"CaffeineMC",
	"No-compromises game logic/server optimization mod.",
)
.add_version(16, 17, {id: 18, note: "Beta"})
.add_category("Performance", "General")
.add_link(
	{ host: "curseforge" },
	{ host: "modrinth" },
	{ host: "github" }
);
