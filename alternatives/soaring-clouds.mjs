import Mod from '../build_src/mod.mjs';

export default new Mod(
	'Soaring Clouds',
	'Draylar',
	'Allows changing the height at which clouds appear.',
)
.add_version(15, 16)
.add_category('Utility', 'Cloud Height')
.add_link(
	{ host: 'curseforge' },
	{ host: 'github', params: { author: 'omega-mc' } },
);
