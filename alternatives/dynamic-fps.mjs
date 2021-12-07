import Mod from '../build_src/mod.mjs';

export default new Mod(
	'Dynamic FPS',
	'juliand665',
	'Improve performance when Minecraft is in the background.',
)
.add_version(14, 15, 16, 17, 18)
.add_category('Performance', 'Client')
.add_link(
	{ host: 'curseforge' },
	{ host: 'modrinth' },
	{ host: 'github' }
);
