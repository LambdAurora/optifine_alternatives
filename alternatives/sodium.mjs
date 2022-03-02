import Mod from "../build_src/mod.mjs";

export default new Mod(
	"Sodium",
	"CaffeineMC",
	"Modern rendering engine and client-side optimization mod for Minecraft.",
)
.icon("https://cdn.modrinth.com/data/AANobbMI/icon.png")
.add_version(16, 17, {id: 18, note: "Alpha"})
.add_category("Performance", "Client")
.add_link(
	{ host: "modrinth" },
	{ host: "curseforge" },
	{ host: "github", params: { namespace: "sodium-fabric" } }
);
