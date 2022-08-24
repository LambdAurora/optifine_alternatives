import Loader from "../build_src/loader.mjs";

export default new Loader(
	"Forge",
	"https://forums.minecraftforge.net/",
	(html, width, height) => html.create_element("span")
);
