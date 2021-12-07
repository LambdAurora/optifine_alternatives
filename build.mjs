import { default as md, html } from "https://lambdaurora.dev/lib.md/lib/index.mjs";
import { existsSync } from "https://deno.land/std/fs/mod.ts";
import { load_mods } from "./build_src/mod.mjs";

const WEBSITE = "https://lambdaurora.dev/";
const WEBSITE_PREFIX = WEBSITE + "optifine_alternatives/";
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

/* Functions */

function new_category(name) {
	return { name: name, mods: [], categories: [] };
}

async function fetch_mods() {
	const mods = (await load_mods()).sort((a, b) => a.namespace.localeCompare(b.namespace));

	const categorized_mods = [
		{ name: 'Performance', mods: [], categories: [new_category('Client'), new_category('General')] },
		new_category('Cosmetic'),
		new_category('Shaders'),
		new_category('Fog'),
		{ name: 'Utility', mods: [], categories: [new_category('Zoom')] },
		new_category('Extras')
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
				const new_category = new_category(mod_category);
				current_level.push(new_category);

				if (i + 1 === mod.categories.length) { // Last category
					new_category.mods.push(mod);
				}

				current_level = new_category.categories;
			}
		}
	}

	return categorized_mods;
}

async function build_mod_tree(md_doc, mods, level = 3) {
	for (const category of mods) {
		if (category.mods.length === 0 && category.categories.length === 0)
			continue;

		md_doc.push(new md.Heading(category.name, 'h' + level));

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

			content = content.replace('${mods}', md_doc.toString());

			Deno.writeFile(BUILD_DIR + '/README.md', ENCODER.encode(content));
		});
}
