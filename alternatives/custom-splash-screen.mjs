import Mod from '../build_src/mod.mjs';

export default new Mod(
	'Custom Splash Screen',
	'TeamMidnightDust',
	"Change Minecraft's loading screen to your liking! Completely configurable!",
)
.add_version(16, 17)
.add_category('Cosmetic', 'Splash Screen')
.add_link(
	{ host: 'curseforge' },
	{ host: 'modrinth' },
	{ host: 'github', params: { namespace: 'CustomSplashScreen' } }
);
