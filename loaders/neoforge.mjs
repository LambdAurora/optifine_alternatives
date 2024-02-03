import Loader from "../build_src/loader.ts";

export default new Loader(
	"NeoForge",
	"https://neoforged.net/",
	(html, width, height) => html.create_element("img")
		.with_attr("src", "https://neoforged.net/img/authors/neoforged.png")
		.with_attr("width", `${width}`)
		.with_attr("height", `${height}`)
);
