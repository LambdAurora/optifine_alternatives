import Mod from "../build_logic/mod.ts";
import { UNMAINTAINED } from "../build_logic/status.ts";

export default new Mod(
	"Resolution Control",
	"juliand665",
	"Allows you to set render resolutions and take large screenshots.",
)
	.icon("https://github.com/juliand665/Resolution-Control/blob/main/GitHub/logo.png?raw=true")
	.add_version({ loader: ["fabric"], v: [14, 15, 16] })
	.add_category("Utility")
	.add_link(
		{ host: "curseforge" },
		{ host: "github" },
	).set_status(UNMAINTAINED);
