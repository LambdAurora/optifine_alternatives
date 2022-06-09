import Loader from "../build_src/loader.mjs";

export default new Loader(
	"Quilt",
	"https://quiltmc.org",
	(html, width, height) => html.create_element("img")
		.with_attr("src", "https://quiltmc.org/assets/img/logo.svg")
		.with_attr("width", `${width}`)
		.with_attr("height", `${height}`)
);
