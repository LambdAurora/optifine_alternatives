import * as html from "@lambdaurora/libhtml";
import Loader from "../build_src/loader.ts";

export default new Loader(
	"Quilt",
	"https://quiltmc.org",
	(width, height) => html.create_element("img")
		.with_attr("src", "https://quiltmc.org/assets/img/logo.svg")
		.with_attr("width", `${width}`)
		.with_attr("height", `${height}`)
);
