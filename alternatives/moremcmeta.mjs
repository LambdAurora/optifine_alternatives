import Mod from '../build_src/mod.mjs';

export default new Mod(
	'MoreMcmeta',
	'soir20',
	'Animate almost any Minecraft texture with more options.',
)
.add_version(16, 17)
.add_category('Cosmetic')
.add_link(
	{ host: 'curseforge', params: { namespace: 'moremcmeta-fabric' } },
	{ host: 'curseforge', params: { modloader: 'Forge' } },
	{ host: 'modrinth' },
	{ host: 'github' }
);
