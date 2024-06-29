import * as html from "@lambdaurora/libhtml";
import * as md from "@lambdaurora/libmd";
import { copy, exists } from "@std/fs";
import { load_mods, default as Mod } from "./build_src/mod.ts";
import { LINK_SVG_PATH, process_headings } from "./build_src/utils.ts";

const WEBSITE = "https://optifine.alternatives.lambdaurora.dev";
const WEBSITE_PREFIX = WEBSITE + "/";
const BUILD_DIR = "./build";
const IMAGES_DIR = BUILD_DIR + "/images";

class Category {
	public mods: Mod[] = [];
	public categories: Category[];

	constructor(public readonly name: string, categories?: Category[]) {
		this.categories = categories ?? [];
	}
}

/* Main */

console.log("Creating build directory.");
if (await exists(BUILD_DIR))
	await Deno.remove(BUILD_DIR, {recursive: true});
await Deno.mkdir(BUILD_DIR);

console.log("Building...");
const categorized_mods = await fetch_mods();

// Build README file

build_readme_file(categorized_mods);

// Build HTML files

build_pages(categorized_mods);

/* Functions */

async function fetch_mods() {
	const mods = (await load_mods()).sort((a, b) => a.namespace.localeCompare(b.namespace));

	const categorized_mods = [
		new Category("Performance", [ new Category("Client"), new Category("General") ]),
		new Category("Cosmetic"),
		new Category("Shaders"),
		new Category("Fog"),
		new Category("Utility", [ new Category("Cloud Height"), new Category("Zoom") ]),
		new Category("Extras")
	];

	// Build categorization of mods.
	while (mods.length !== 0) {
		const mod = mods.shift()!;

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
				const category = new Category(mod_category);
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

async function build_mod_tree(md_doc: md.Document, mods: Category[], level: md.HeadingLevel = 3) {
	for (const category of mods) {
		if (category.mods.length === 0 && category.categories.length === 0)
			continue;

		md_doc.push(new md.Heading(category.name, level));

		if (category.mods.length !== 0) {
			md_doc.push(new md.List(await Promise.all(category.mods.map((mod) => mod.to_markdown()))));
		}

		if (category.categories.length !== 0) {
			await build_mod_tree(md_doc, category.categories, level + 1);
		}
	}
}

async function build_readme_file(mods: Category[]) {
	const md_doc = new md.Document();

	await Promise.all([Deno.readTextFile("README.in.md"), build_mod_tree(md_doc, mods)])
		.then(([content, _]) => {
			content = content.replace("${mods}", md_doc.toString());

			Deno.writeTextFile(BUILD_DIR + "/README.md", content);
		});
}

async function build_pages(mods: Category[]) {
	await Promise.all([
		Deno.copyFile("giscus_style.css", BUILD_DIR + "/giscus_style.css"),
		copy("images/", IMAGES_DIR)
	]);

	async function build_mod_cards(parent: html.Element, mods: Category[], level = 3) {
		for (const category of mods) {
			if (category.mods.length === 0 && category.categories.length === 0)
				continue;
	
			const details = html.create_element("details")
			parent.append_child(details);

			const category_id = encodeURI(category.name)
				.replace(/%20/g, "-")
				.toLocaleLowerCase();

			details.append_child(
				html.summary([
					html.create_element(`h${level}`)
						.with_attr("id", category_id)
						.with_child(html.a({
							attributes: {
								class: "ls_heading_anchor",
								href: `#${category_id}`,
								"aria-label": `Anchor link: ${category.name}`
							},
							children: [
								html.svg({
									attributes: {
										class: "ls_icon",
										ls_size: "small",
										viewBox: "0 0 16 16",
										version: "1.1",
										"aria-hidden": "true"
									},
									children: [
										html.create_element("path")
											.with_attr("d", LINK_SVG_PATH)
									]
								})
							]
						}))
						.with_child(category.name)
				])
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

	await Promise.all([Deno.readTextFile("index.in.html"), Deno.readTextFile("README.in.md"), build_mod_cards(section, mods)])
		.then(([content, readme, _]) => {
			const INSERT_MODS_MARKER = "insert_mods";

			readme = readme.replace("${mods}", `<!--${INSERT_MODS_MARKER}-->`);

			const md_doc = md.parser.parse(readme, { link: { auto_link: true } });
			const article = html.create_element("article");
			md.render_to_html(md_doc, { parent: article });

			(article.children.find(child => child instanceof html.Element && child.tag === html.Tag.h1) as html.Element)
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

			process_headings(article, { exclude: ["h1"] });

			content = content.replace(/\$\{WEBSITE\}/g, WEBSITE).replace(/\$\{WEBSITE_PREFIX\}/g, WEBSITE_PREFIX)
				.replace("${list_content}", article.html(new html.StringifyStyle("\t", 3)).trimStart());

			Deno.writeTextFile(BUILD_DIR + "/index.html", content);
		});
}
