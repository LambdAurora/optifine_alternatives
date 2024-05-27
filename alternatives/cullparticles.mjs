import Mod from "../build_src/mod.ts";

const HOST_ID = "cull-particles-fabric";

export default new Mod(
	"Cull Particles",
	"Tfarcenim",
	"Don't render particles that can't be seen. Unneeded with Sodium.",
)
.icon("https://media.forgecdn.net/avatars/249/263/637173018816914995.png")
.add_version({ loader: ["fabric", "quilt"], v: [15, 16, 17, 18, 19] }, { loader: ["forge"], v: [15, 16.2] })
.add_category("Performance", "Client")
.add_link(
	{ host: "curseforge", params: { namespace: HOST_ID } },
	{ host: "curseforge", params: { namespace: "cull-particles" } },
	{ host: "github", params: { namespace: "CullParticlesFabric" } },
	{ host: "github", params: { namespace: "CullParticles" } }
);
