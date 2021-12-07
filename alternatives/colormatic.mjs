import Mod from '../build_src/mod.mjs';

export default new Mod(
	'Colormatic',
	'kvverti',
	'An independent implementation of the custom colors mod for Minecraft.',
)
.add_version(14, 15, 16, 17, 18)
.add_category('Cosmetic')
.add_link(
	{ host: 'curseforge' },
	{ host: 'modrinth' },
	{ host: 'github' }
);
