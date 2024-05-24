import Mod from "../build_src/mod.mjs";

const mod = new Mod(
	"Sodium",
	"CaffeineMC",
	"Modern rendering engine and client-side optimization mod for Minecraft.",
)
.icon("https://cdn.modrinth.com/data/AANobbMI/icon.png")
.add_category("Performance", "Client")
.add_link(
	{ host: "modrinth" },
	{ host: "github", params: { namespace: "sodium-fabric" } }
);

await mod.import_versions_from_modrinth();

export default mod;
