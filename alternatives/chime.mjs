import Mod from '../build_src/mod.mjs';

export default new Mod(
	'Chime',
	'Emi',
	'Adds predicates for more interactive item models, CIT replacement with a custom format.',
)
.add_version(16)
.add_category('Cosmetic')
.add_link(
	{ host: 'curseforge', params: { namespace: 'chime-fabric' } },
	{ host: 'modrinth' },
	{ host: 'github', params: { author: 'emilyploszaj' } }
);
