import Mod from "../build_src/mod.mjs";

const HOST_ID = "cull-particles-fabric";

export default new Mod(
	"Cull Particles",
	"Tfarcenim",
	"Don't render particles that can't be seen. Unneeded with Sodium.",
)
.add_version(15, 16, 17, 18)
.add_category("Performance", "Client")
.add_link(
	{ host: "curseforge", params: { namespace: HOST_ID } },
	{ host: "github", params: { namespace: "CullParticlesFabric" } }
);
