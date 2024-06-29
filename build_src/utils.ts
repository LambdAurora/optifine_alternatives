import * as html from "@lambdaurora/libhtml";

export const LINK_SVG_PATH = "m7.775 3.275 1.25-1.25a3.5 3.5 0 1 1 4.95 4.95l-2.5 2.5a3.5 3.5 0 0 1-4.95 0 .751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018 1.998 1.998 0 0 0 2.83 0l2.5-2.5a2.002 2.002 0 0 0-2.83-2.83l-1.25 1.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042Zm-4.69 9.64a1.998 1.998 0 0 0 2.83 0l1.25-1.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-1.25 1.25a3.5 3.5 0 1 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 4.95 0 .751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018 1.998 1.998 0 0 0-2.83 0l-2.5 2.5a1.998 1.998 0 0 0 0 2.83Z";
const HEADING_TAGS: string[] = ["h1", "h2", "h3", "h4", "h5", "h6"];

export function process_headings(article: html.Element, options?: { exclude?: readonly string[] }): void {
	let check = (element: string) => HEADING_TAGS.includes(element);

	if (options?.exclude) {
		check = (element: string) => {
			return HEADING_TAGS.includes(element) && !options.exclude?.includes(element)
		};
	}

	for (const node of article.children) {
		if (node instanceof html.Element && check(node.tag.name)) {
			const id = node.get_attr("id")?.value;

			if (!id) {
				continue;
			}

			const ref = `#${encodeURI(id)}`;

			const link = html.a({
				attributes: {
					class: "ls_heading_anchor",
					href: ref,
					"aria-label": `Anchor link: ${node.text()}`
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
			});

			node.children.splice(0, 0, link);
		}
	}
}
