import Mod from "../build_src/mod.mjs";

export default new Mod(
	"FogYeet",
	"SRAZKVT",
	"Small mod for 1.15 to remove fog.",
)
.add_version({ loader: ["fabric"], v: [15], note: "Abandoned" })
.add_category("Fog")
.add_link(
	{ host: "modrinth" },
	{ host: "github" }
);
