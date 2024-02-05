import Mod from "../build_src/mod.mjs";

const HOST_ID = "polytone";

const mod = new Mod(
	"Polytone",
	"MehVahdJukaar",
	"Multipurpose Visual Customization mod: tweak Colors, Colormaps, Lightmaps, Sounds, Gui Elements, Biome Effects, Particles, Fog Colors and more. Supports old Optifine formats",
)
.icon("https://github.com/MehVahdJukaar/polytone/blob/master/forge/src/main/resources/icon.png?raw=true")
.add_version(
	{ loader: ["fabric"], v: [18, 19, 20.4] },
	{ loader: ["neoforge"], v: [19, 20.4] },
	{ loader: ["forge"], v: [18, 19, 20.1] })
.add_category("Cosmetic", "Fog")
.add_link(
	{ host: "modrinth", params: { namespace: HOST_ID } },
	{ host: "curseforge", params: { namespace: HOST_ID } },
	{ host: "github", params: { namespace: HOST_ID }}
);

await mod.import_versions_from_modrinth(HOST_ID);


export default mod;
