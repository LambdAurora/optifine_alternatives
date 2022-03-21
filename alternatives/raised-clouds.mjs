import Mod from '../build_src/mod.mjs';

export default new Mod(
	'Raised Clouds',
	'haykam',
	'Allows changing the height at which clouds appear.',
)
.add_version(16, 17, 18)
.add_category('Cosmetic')
.add_link(
	{ host: 'curseforge' },
	{ host: 'github', params: { author: 'haykam821' } },
);
