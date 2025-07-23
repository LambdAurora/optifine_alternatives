import Mod from "../build_logic/mod.ts";
import { UNMAINTAINED } from "../build_logic/status.ts";

const mod = new Mod(
	"JMX",
	"vram-guild",
	"JMX adds support for FREX Rendering API features to Minecraft JSON model loading. It can also be configured to load all JSON models as FREX meshes, which may offer a modest reduction in memory usage due to more efficient data structures.",
)
	.icon("https://cdn.modrinth.com/data/OHg71hvQ/icon.png")
	.add_version({ loader: ["fabric"], v: [16, 17, 18, 19.2] })
	.add_category("Cosmetic")
	.add_link(
		{ host: "modrinth", params: { namespace: "imx" } },
		{ host: "curseforge" },
		{ host: "github", params: { namespace: "json-model-extensions" } },
	).set_status(UNMAINTAINED);

await mod.import_versions_from_modrinth("imx");

export default mod;
