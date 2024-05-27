import * as html from "@lambdaurora/libhtml";
import Loader from "../build_src/loader.ts";

export default new Loader(
	"Fabric",
	"https://fabricmc.net",
	(width, height) => html.create_element("img")
		.with_attr("src", "https://fabricmc.net/assets/logo.png")
		.with_attr("width", `${width}`)
		.with_attr("height", `${height}`)
);
