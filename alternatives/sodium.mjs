import Mod from "../build_src/mod.mjs";

export default new Mod(
	"Sodium",
	"CaffeineMC",
	"Modern rendering engine and client-side optimization mod for Minecraft.",
)
.add_version(16, 17, {id: 18, note: "Alpha"})
.add_category("Performance", "Client")
.add_link(
	{ host: "curseforge" },
	{ host: "modrinth" },
	{ host: "github" }
);
