import Loader from "../build_src/loader.mjs";

export default new Loader(
	"Fabric",
	"https://fabricmc.net",
	(html, width, height) => html.create_element("img")
		.with_attr("src", "https://fabricmc.net/assets/logo.png")
		.with_attr("width", `${width}`)
		.with_attr("height", `${height}`)
);
