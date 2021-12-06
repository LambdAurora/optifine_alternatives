import html from "https://lambdaurora.dev/lib.md/lib/index.mjs";
import Host from '../build_src/host.mjs';

export default new Host(
	'Modrinth',
	'https://modrinth.com',
	(base_url, params) => `${base_url}/mod/${params.namespace}`,
	(width, height) => html.create_element('img')
		.with_attr()
);
