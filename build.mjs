import { md, html } from "@lib.md/mod.mjs";
import { existsSync } from "https://deno.land/std/fs/mod.ts";
import { load_mods } from "./build_src/mod.mjs";

const WEBSITE = "https://optifine.alternatives.lambdaurora.dev";
const WEBSITE_PREFIX = WEBSITE + "/";
const BUILD_DIR = "./build";
const DECODER = new TextDecoder("utf-8");
const ENCODER = new TextEncoder();

/* Main */

console.log("Creating build directory.");
if (existsSync(BUILD_DIR))
	await Deno.remove(BUILD_DIR, {recursive: true});
await Deno.mkdir(BUILD_DIR);

console.log("Building...");
const categorized_mods = await fetch_mods();

// Build README file

build_readme_file(categorized_mods);

// Build HTML files

build_pages(categorized_mods);

/* Functions */

function new_category(name) {
	return { name: name, mods: [], categories: [] };
}

async function fetch_mods() {
	const mods = (await load_mods()).sort((a, b) => a.namespace.localeCompare(b.namespace));

	const categorized_mods = [
		{ name: "Performance", mods: [], categories: [new_category("Client"), new_category("General")] },
		new_category("Cosmetic"),
		new_category("Shaders"),
		new_category("Fog"),
		{ name: "Utility", mods: [], categories: [new_category("Cloud Height"), new_category("Zoom")] },
		new_category("Extras")
	];

	// Build categorization of mods.
	while (mods.length !== 0) {
		const mod = mods.shift();

		let current_level = categorized_mods;
		for (let i = 0; i < mod.categories.length; i++) {
			const mod_category = mod.categories[i];

			let found = false;
			for (let j = 0; j < current_level.length && !found; j++) {
				if (current_level[j].name === mod_category) {
					if (i + 1 === mod.categories.length) { // Last category
						current_level[j].mods.push(mod);
					}

					current_level = current_level[j].categories;
					found = true;
				}
			}

			if (!found) {
				const category = new_category(mod_category);
				current_level.push(category);

				if (i + 1 === mod.categories.length) { // Last category
					category.mods.push(mod);
				}

				current_level = category.categories;
			}
		}
	}

	return categorized_mods;
}

async function build_mod_tree(md_doc, mods, level = 3) {
	for (const category of mods) {
		if (category.mods.length === 0 && category.categories.length === 0)
			continue;

		md_doc.push(new md.Heading(category.name, "h" + level));

		if (category.mods.length !== 0) {
			md_doc.push(new md.List(await Promise.all(category.mods.map((mod) => mod.to_markdown()))));
		}

		if (category.categories.length !== 0) {
			await build_mod_tree(md_doc, category.categories, level + 1);
		}
	}
}

async function build_readme_file(mods) {
	const md_doc = new md.MDDocument();

	Promise.all([Deno.readFile("README.in.md"), build_mod_tree(md_doc, mods)])
		.then(results => {
			let content = DECODER.decode(results[0]);

			content = content.replace("${mods}", md_doc.toString());

			Deno.writeFile(BUILD_DIR + "/README.md", ENCODER.encode(content));
		});
}

async function build_pages(mods) {
	Promise.all([
		Deno.copyFile("giscus_style.css", BUILD_DIR + "/giscus_style.css"),
		Deno.copyFile("forge.png", BUILD_DIR + "/forge.png")
	]);

	async function build_mod_cards(parent, mods, level = 3) {
		for (const category of mods) {
			if (category.mods.length === 0 && category.categories.length === 0)
				continue;
	
			const details = html.create_element("details")
			parent.append_child(details);

			details.append_child(
				html.create_element("summary")
					.with_child(
						html.create_element("h" + level)
							.with_attr("id", encodeURI(category.name).replace(/%20/g, "-").toLocaleLowerCase())
							.with_child(category.name)
					)
			);
	
			if (category.mods.length !== 0) {
				details.attr("open", "");

				const rendered_mods = await Promise.all(category.mods.map((mod) => mod.to_html()));
				rendered_mods.forEach(mod => {
					details.append_child(mod);
				});

				details.append_child(html.create_element("hr"));
			}
	
			if (category.categories.length !== 0) {
				details.attr("open", "");

				await build_mod_cards(details, category.categories, level + 1);
			}
		}
	}

	const section = html.create_element("section");

	Promise.all([Deno.readFile("index.in.html"), Deno.readFile("README.in.md"), build_mod_cards(section, mods)])
	.then(args => {
		const INSERT_MODS_MARKER = "insert_mods";

		let content = DECODER.decode(args[0]);

		let readme = DECODER.decode(args[1]);
		readme = readme.replace("${mods}", `<!--${INSERT_MODS_MARKER}-->`);

		const md_doc = md.parser.parse(readme, { auto_link: true });
		let article = html.create_element("article");
		md.render_to_html(md_doc, { parent: article });

		article.children.find(child => child instanceof html.Element && child.tag === html.Tag.h1)
			.append_child(html.create_element("span").with_attr("class", ["right"]).with_child(html.create_element("a")
				.with_attr("class", ["github-button", "right"])
				.with_attr("href", "https://github.com/LambdAurora/optifine_alternatives")
				.with_attr("data-color-scheme", "no-preference: light_high_contrast; light: light_high_contrast; dark: dark_high_contrast;")
				.with_attr("data-icon", "octicon-star")
				.with_attr("data-show-count", "true")
				.with_attr("aria-label", "Star LambdAurora/optifine_alternatives on GitHub")
			));

		for (let i = 0; i < article.children.length; i++) {
			const child = article.children[i];

			if (child instanceof html.Comment && child.content === INSERT_MODS_MARKER) {
				article.children[i] = section;
			}
		}

		content = content.replace(/\$\{WEBSITE\}/g, WEBSITE).replace(/\$\{WEBSITE_PREFIX\}/g, WEBSITE_PREFIX)
			.replace("${list_content}", article.html({ prettified: false }));

		Deno.writeFile(BUILD_DIR + "/index.html", ENCODER.encode(content));
	});
}
