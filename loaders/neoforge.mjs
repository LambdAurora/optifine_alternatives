import Loader from "../build_src/loader.mjs";

export default new Loader(
	"NeoForge",
	"https://neoforged.net/",
	(html, width, height) => html.create_element("span")
);
