import Mod from "../build_src/mod.mjs";

export default new Mod(
	"EntityCulling",
	"tr7zw",
	"Using async path-tracing to hide (Block-)Entities that are not visible.",
)
.add_version(16, 17, 18)
.add_category("Performance", "Client")
.add_link(
	{ host: "curseforge" },
	{ host: "github" }
);
