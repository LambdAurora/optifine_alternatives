import Mod from '../build_src/mod.mjs';

export default new Mod(
	'LambdaBetterGrass',
	'LambdAurora',
	'Adds better grass and snow to the game.',
)
.add_version(16, 17, 18)
.add_category('Cosmetic')
.add_link(
	{ host: 'curseforge' },
	{ host: 'modrinth' },
	{ host: 'github' }
)
.requires('frapi');
