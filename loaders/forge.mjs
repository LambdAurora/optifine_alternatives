import Loader from "../build_src/loader.mjs";

export default new Loader(
	"Forge",
	"https://files.minecraftforge.net/",
	(html, width, height) => html.create_element("img")
		.with_attr("src", "forge.png")
		.with_attr("width", `${width}`)
		.with_attr("height", `${height}`)
);
