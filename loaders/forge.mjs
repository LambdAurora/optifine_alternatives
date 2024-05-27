import * as html from "@lambdaurora/libhtml";
import Loader from "../build_src/loader.ts";

export default new Loader(
	"Forge",
	"https://files.minecraftforge.net/",
	(width, height) => html.create_element("img")
		.with_attr("src", "images/forge.png")
		.with_attr("width", `${width}`)
		.with_attr("height", `${height}`)
);
