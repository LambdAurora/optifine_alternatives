import Mod from "../build_src/mod.mjs";

export default new Mod(
	"EntityCulling",
	"tr7zw",
	"Using async path-tracing to hide (Block-)Entities that are not visible.",
)
.icon("https://raw.githubusercontent.com/tr7zw/EntityCulling/1.17/EntityCulling-Shared/src/main/resources/assets/entityculling/icon.png")
.add_version({ loader: ["fabric", "quilt"], v: [16, 17, 18, 19] }, { loader: ["forge"], v: [8.9, 16, 17, 18, 19] })
.add_category("Performance", "Client")
.add_link(
	{ host: "modrinth" },
	{ host: "curseforge" },
	{ host: "github" }
);
