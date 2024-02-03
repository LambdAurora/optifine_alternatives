import Loader from "../build_src/loader.ts";

export default new Loader(
	"Forge",
	"https://forums.minecraftforge.net/",
	(html, width, height) => html.create_element("span")
);
