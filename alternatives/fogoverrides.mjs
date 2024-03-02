import Mod from "../build_src/mod.mjs";

export default new Mod(
	"Fog Overrides",
	"fabbe50",
	"Allows customization of fog render distance, fog color, cloud height and cloud color. Brings back void fog and allows for biome specific fog.",
)
.icon("https://cdn.modrinth.com/data/B1vBJNM4/icon.png")
.add_version({ loader: ["forge"], v: [15.2, 16.1, 16.4, 16.5, 18.2, 19, 19.2, 19.3, 19.4, 20, 20.1] })
.add_category("Fog", "Client")
.add_link(
	{ host: "modrinth", params: { namespace: "fog-overrides" } },
	{ host: "curseforge", params: { namespace: "fogoverrides" } },
	{ host: "github", params: { namespace: "FogOverrides" } }
);
