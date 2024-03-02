import Mod from "../build_src/mod.mjs";

export default new Mod(
	"Drippy Loading Screen",
	"Keksuccino",
	"Drippy Loading Screen is a client-side mod to fully customize Minecraft's loading screen (aka. splash screen)."
)
.icon("https://media.forgecdn.net/avatars/415/118/637638101350387776.png")
.add_version({ loader: ["forge", "fabric"], v: [16, 17, 18, 19.4] })
.add_category("Cosmetic", "Splash Screen")
.add_link(
	{ host: "curseforge" },
	{ host: "github", params: { namespace: "Drippy-Loading-Screen" } }
);
