import Host from "../build_src/host.mjs";

export default new Host(
	"CurseForge",
	"https://curseforge.com",
	(base_url, params) => `${base_url}/minecraft/mc-mods/${params.namespace}`
);
