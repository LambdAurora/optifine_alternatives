import Mod from "../build_src/mod.mjs";

const HOST_ID = "cull-particles-fabric";

export default new Mod(
	"Cull Particles",
	"Tfarcenim",
	"Don't render particles that can't be seen. Unneeded with Sodium.",
)
.icon("https://media.forgecdn.net/avatars/thumbnails/249/807/64/64/637175514278678064.png")
.add_version({ loader: ["fabric", "quilt"], v: [15, 16, 17, 18, 19] })
.add_category("Performance", "Client")
.add_link(
	{ host: "curseforge", params: { namespace: HOST_ID } },
	{ host: "github", params: { namespace: "CullParticlesFabric" } }
);
