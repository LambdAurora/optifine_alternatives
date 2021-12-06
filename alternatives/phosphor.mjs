import Mod from '../build_src/mod.mjs';

export default new Mod(
	'Phosphor',
	'CaffeineMC',
	'No-compromises lighting engine optimization mod.',
)
.add_version({id: 12, note: 'Forge'}, 15, 16, 17)
.add_category('Performance', 'General')
.add_link(
	{ host: 'curseforge' },
	{ host: 'modrinth' },
	{ host: 'github' }
);
