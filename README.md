# OptiFine Alternatives

## Why?

OptiFine was originally a great mod offering many quality of life improvements for the player in the beginning. However, over the years, its benefits have dwindled and has caused many issues for modders. This is due to Minecraft's codebase improving over the years and OptiFine's aggressiveness towards replacing entire swaths of code while being closed source making it very difficult to figure out why OptiFine has broken another modder's mod. 
Also, worth noting that OptiFine natively doesn't support Fabric, and it's hard to maintain OptiFabric.

In the modern Minecraft era, with Fabric's community effort, modders have begun to create alternatives for most of OptiFine's features to allow players to maintain better performance, better mod compatibility, and better support.

[OptiFabric: A note about the 1.16 crashes][optifabric_issue]

[optifabric_issue]: https://github.com/modmuss50/OptiFabric/issues/242

## This list

This list will list recommended OptiFine alternatives by me (LambdAurora), so it has some requirements for mods to be listed here:

 - They must be publicly available - if they're only available on request they are not eligible.
 - Mods must respect the Mojang EULA.
 - “PVP” clients (Badlion / Lunar / etc.) and cheat clients are not considered mods.
 - Mods must not refer to cheat clients.
 - Mods that change gameplay in a way (e.g. zoom) that have a way for servers to disable them will be favored.
 - Free and open-source mods are favored.

This list now has a fancy URL: https://optifine.alternatives.lambdaurora.dev/

### Contribute

You can contribute to this list by opening a pull request on the `data` branch via [GitHub](https://github.com/LambdAurora/optifine_alternatives).

## Alternatives

### Performance

#### Client

- [Cull Leaves][cull leaves] - Adds culling to leaf blocks, providing a huge performance boost over vanilla. Similar to OptiFine's Smart Leaves feature.  
  - Available for: fabric: 1.16 -> 1.20.1, quilt: 1.17 -> 1.20.1, forge: 1.19.2 -> 1.20.1  
- [Cull Particles][cull particles] - Don't render particles that can't be seen. Unneeded with Sodium.  
  - Available for: fabric: 1.15 -> 1.19, quilt: 1.15 -> 1.19, forge: 1.15 -> 1.16.2  
- [Dynamic FPS][dynamic fps] - Reduce resource usage while Minecraft is in the background or idle.  
  - Available for: fabric: 1.14 -> 1.21.1, quilt: 1.14 -> 1.21.1, forge: 1.16.5 -> 1.21.1, neoforge: 1.20.2 -> 1.21.1  
- [Enhanced Block Entities][enhanced block entities] - Reduce FPS lag with block entities, as well as customize them with resource packs.  
  - Available for: fabric: 1.16.2 -> 1.21.1, quilt: 1.18 -> 1.21.1  
- [EntityCulling][entityculling] - Using async path-tracing to hide (Block-)Entities that are not visible.  
  - Available for: fabric: 1.16 -> 1.20.2, 1.20.4 -> 1.21.1, quilt: 1.16 -> 1.20.1, forge: 1.7.10 -> 1.8.9, 1.12.2, 1.16 -> 1.20.2, 1.20.4, 1.20.6 -> 1.21.1, neoforge: 1.20.2, 1.20.4, 1.20.6 -> 1.21.1  
- [FPS Reducer][fps reducer] - Improve performance when Minecraft is in the background, minimized or left inactive/idle for a while.  
  - Available for: fabric: 1.16.5 -> 1.20.2, 1.20.4 -> 1.21.1, quilt: 1.16.5 -> 1.20.2, 1.20.4 -> 1.21.1, forge: 1.7.10 -> 1.20.2, 1.20.4, 1.20.6 -> 1.21.1, neoforge: 1.20 -> 1.20.2, 1.20.4 -> 1.21.1  
- [Sodium][sodium] - Modern rendering engine and client-side optimization mod for Minecraft.  
  - Available for: fabric: 1.16.3 -> 1.21.1, quilt: 1.18.2 -> 1.21.1, neoforge: 1.21.1  

#### General

- [Krypton][krypton] - A mod to optimize the Minecraft networking stack.  
  - Available for: fabric: 1.16.2 -> 1.21.1, quilt: 1.16.2 -> 1.21.1  
- [LazyDFU][lazydfu] - Makes the initialization of DataFixerUpper "lazy". DataFixerUpper (or DFU for short) is the system used by Minecraft to convert old worlds to the current version you're running, in Vanilla it's initialized at startup and is slow (and eats a lot of resources). This mod delays the initialization of DFU by initializing only when needed, if you're playing only on multiplayer it'll never get initialized for example.  
  - Available for: fabric: 1.14 -> 1.20.6, quilt: 1.14 -> 1.20.1, forge: 1.16 -> 1.19.3  
- [Lithium][lithium] - No-compromises game logic/server optimization mod.  
  - Available for: fabric: 1.15 -> 1.16, 1.16.2 -> 1.21.1, quilt: 1.15 -> 1.21.1  
- [Phosphor][phosphor] - No-compromises lighting engine optimization mod. Incompatible with Starlight.  
  - Available for: fabric: 1.15 -> 1.19.4, quilt: 1.15 -> 1.19.4  
- [Starlight][starlight] - Rewrites the light engine to fix lighting performance and lighting errors. Uses a custom format for light storage. Incompatible with Phosphor.  
  - Available for: fabric: 1.17 -> 1.20.4, quilt: 1.17 -> 1.20.4, forge: 1.17 -> 1.20.2, 1.20.4  

### Cosmetic

- [Animatica][animatica] - A mod implementing the OptiFine/MCPatcher animated texture format.  
  - Available for: fabric: 1.17 -> 1.21, quilt: 1.18 -> 1.21  
- [Block Entity Extended Rendering][block entity extended rendering] - Adds a slider to change the render distance for block entities.  
  - Available for: fabric: 1.18 -> 1.20.1, quilt: 1.18 -> 1.20.1  
- [Chime][chime] - Adds predicates for more interactive item models, CIT replacement with a custom format.  
  - Available for: fabric: 1.16, 1.16.4 -> 1.16.5, 1.18 -> 1.20.2, 1.20.4, quilt: 1.18 -> 1.20.2, 1.20.4  
- [CIT Resewn][cit resewn] - Re-implements MCPatcher's CIT (custom item textures from optifine resource packs)  
  - Available for: fabric: 1.17 -> 1.20.1, 1.20.4 -> 1.21.1, quilt: 1.17 -> 1.19.3  
- [Clear Skies][clear skies] - Horizon and fog match the sky color. True blue skies!  
  - Available for: fabric: 1.15 -> 1.19.3, quilt: 1.15 -> 1.19.3, forge: 1.16 -> 1.19.3  
- [Colormatic][colormatic] - An independent implementation of the custom colors mod for Minecraft.  
  - Available for: fabric: 1.14 -> 1.19.2, quilt: 1.18 -> 1.19.2  
- [Connected Block Textures][connected block textures] - An implementation of the MCPatcher/Optifine connected textures format on the Fabric modloader. Unmaintained.  
  - Available for: fabric: 1.16  
  - Requires [Fabric Renderer API](#compatibility "More information.")  
- [Continuity][continuity] - A Fabric mod that allows for efficient connected textures. Support emissive textures.  
  - Available for: fabric: 1.17 -> 1.21.1, quilt: 1.17 -> 1.21.1  
  - Requires [Fabric Renderer API](#compatibility "More information.")  
- [Custom Entity Models (CEM)][custom entity models (cem)] - An implementation of custom entity models heavily based off of Optifine's format that aims to achieve feature parity with Optifine's custom entity models.  
  - Available for: fabric: 1.16 -> 1.19.4, quilt: 1.16 -> 1.19.4  
- [Custom GUI][custom gui] - A mod allowing to animate GUI textures or replace container textures with minimal predicates.  
  - Available for: fabric: 1.16 -> 1.17  
- [Entity Model Features][entity model features] - A Fabric mod implementing support for OptiFine-format custom entity model (CEM) resourcepacks. Fully compatible with Sodium & Fresh Animations.  
  - Available for: fabric: 1.18.2 -> 1.21.1, forge: 1.18.2 -> 1.21.1, quilt: 1.18.2 -> 1.21.1, neoforge: 1.18.2 -> 1.20.2, 1.20.4 -> 1.21.1  
- [Entity Texture Features][entity texture features] - A Fabric mod implementing randomized & emissive texture support for mobs set by the resourcepack. Fully compatible with the Optifine format & Sodium.  
  - Available for: fabric: 1.16.5 -> 1.21.1, forge: 1.16.5 -> 1.20.4, 1.20.6 -> 1.21.1, quilt: 1.16.5 -> 1.21.1, neoforge: 1.18.2 -> 1.19.2, 1.19.4 -> 1.20.4, 1.20.6 -> 1.21.1  
- [FabricSkyboxes][fabricskyboxes] - Allows resource packs to define custom skyboxes. OptiFine format is not compatible by default, converters are available.  
  - Available for: fabric: 1.16.3 -> 1.21.1, quilt: 1.17 -> 1.19, 1.19.4 -> 1.21.1  
- [JMX][jmx] - JMX adds support for FREX Rendering API features to Minecraft JSON model loading. It can also be configured to load all JSON models as FREX meshes, which may offer a modest reduction in memory usage due to more efficient data structures.  
  - Available for: fabric: 1.16 -> 1.19, 1.19.2 -> 1.20.1, quilt: 1.16 -> 1.18, 1.18.2 -> 1.20.1  
- [JsonEM (Json Entity Models)][jsonem (json entity models)] - Data driven entity model library, should work with most entities. Does not support OptiFine's format.  
  - Available for: fabric: 1.18 -> 1.21, quilt: 1.18 -> 1.21  
- [LambdaBetterGrass][lambdabettergrass] - Adds better grass and snow to the game.  
  - Available for: quilt: 1.18.2 -> 1.20.1, fabric: 1.16.2 -> 1.19.2  
  - Requires [Fabric Renderer API](#compatibility "More information.")  
- [LambDynamicLights][lambdynamiclights] - Adds dynamic lighting to the game.  
  - Available for: fabric: 1.15 -> 1.21.1, quilt: 1.17 -> 1.21.1  
- [More Block Predicates][more block predicates] - Allows resource packs to change block models depending on new conditions! Custom format.  
  - Available for: fabric: 1.17 -> 1.19.2, quilt: 1.17 -> 1.19.2  
- [MoreMcmeta][moremcmeta] - Animate almost any Minecraft texture with more options.  
  - Available for: fabric: 1.16.5 -> 1.20.4, 1.20.6 -> 1.21, quilt: 1.17 -> 1.20.4, forge: 1.16.5 -> 1.20.4, 1.20.6 -> 1.21  
- [OptiGUI][optigui] - Custom inventory GUIs on Fabric&Quilt with OptiFine resource pack support&many more features  
  - Available for: fabric: 1.18 -> 1.21.1, quilt: 1.18 -> 1.21.1  
- [Polytone][polytone] - Multipurpose Visual Customization mod: tweak colors, colormaps, lightmaps, sounds, GUI elements, biome effects, particles, fog colors and more.Supports old Optifine formats  
  - Available for: fabric: 1.18.2 -> 1.20.4, 1.20.6 -> 1.21.1, quilt: 1.18.2 -> 1.20.4, neoforge: 1.19.2 -> 1.20.4, 1.20.6 -> 1.21.1, forge: 1.18.2 -> 1.20.4  
- [Transparent][transparent] - Allows resource packs to make entities support transparency.  
  - Available for: fabric: 1.15 -> 1.20.4, 1.20.6, quilt: 1.15 -> 1.20.4, 1.20.6, forge: 1.15 -> 1.20.4, 1.20.6, neoforge: 1.20.2 -> 1.20.4, 1.20.6  
- [Varied Mob Textures][varied mob textures] - This mod allows the resource packs creator to have multiple randomized textures for the same mob. Uses custom format, OptiFine-based resource packs will need conversion.  
  - Available for: fabric: 1.16  

#### Splash Screen

- [Custom Splash Screen][custom splash screen] - Change Minecraft's loading screen to your liking! Completely configurable!  
  - Available for: quilt: 1.18 -> 1.21.1, fabric: 1.16 -> 1.21.1  
- [Dark Loading Screen][dark loading screen] - A simple mod to make the loading screen darker.  
  - Available for: quilt: 1.17 -> 1.21.1, fabric: 1.14 -> 1.21.1  
- [Quilt Loading Screen][quilt loading screen] - A loading screen based off of The Quilt Community's server banner.  
  - Available for: quilt: 1.18.2 -> 1.20.1, fabric: 1.16.5 -> 1.18.2  
- [Splash][splash] - Splash is a Fabric mod that allows you to customize the colors of your splash screen.  
  - Available for: fabric: 1.16 -> 1.17  

### Shaders

- [Canvas Renderer][canvas renderer] - A new rendering engine. Incompatible with Sodium.  
  - Available for: fabric: 1.17 -> 1.19, 1.19.2 -> 1.20.2, quilt: 1.17 -> 1.18, 1.18.2 -> 1.20.2  
- [Iris][iris] - A new shaders mod for Minecraft intended to be compatible with existing ShadersMod/Optifine shaders.  
  - Available for: fabric: 1.16.5 -> 1.21.1, quilt: 1.16.5 -> 1.21.1, neoforge: 1.21 -> 1.21.1  

### Fog

- [ClearView][clearview] - Controls which kinds of fogs are shown.  
  - Available for: fabric: 1.15 -> 1.16  
- [Custom Fog][custom fog] - A mod allowing you to customize the appearance of fog in your world.  
  - Available for: fabric: 1.15 -> 1.21.1, quilt: 1.15 -> 1.20.4  
- [Fog Control][fog control] - Allows the user to adjust the (client) distance at which fogs render or disable them completely.   
  - Available for: fabric: 1.17 -> 1.17.1, 1.20.4  
- [NoFog][nofog] - A simple client-side mod supporting both forge and fabric that removes all fog. (ARR)  
  - Available for: fabric: 1.16.5 -> 1.20.4, 1.20.6 -> 1.21, quilt: 1.16.5 -> 1.20.4, 1.20.6 -> 1.21, forge: 1.10.2 -> 1.20.1, neoforge: 1.20.1 -> 1.20.4, 1.20.6 -> 1.21  

### Utility

- [Fabrishot][fabrishot] - Take insanely large screenshots because why not?  
  - Available for: fabric: 1.16 -> 1.20.1, quilt: 1.16 -> 1.20.1  
- [No Telemetry][no telemetry] - No Telemetry is a mod that allows you to disable Microsofts data tracking which has been added in the snapshot 21w38a.  
  - Available for: fabric: 1.18 -> 1.21.1, forge: 1.18 -> 1.21.1, quilt: 1.18 -> 1.21.1  
- [Resolution Control][resolution control] - Allows you to set render resolutions and take large screenshots.  
  - Available for: fabric: 1.14 -> 1.16  
- [ResolutionControl+][resolutioncontrol+] - Allows you to set render resolutions and take large screenshots.  
  - Available for: fabric: 1.16.5, 1.19.4 -> 1.20.4  

#### Cloud Height

- [Raised Clouds][raised clouds] - Allows changing the height at which clouds appear.  
  - Available for: fabric: 1.16.2 -> 1.21.1, quilt: 1.16.2 -> 1.19.4  
- [Soaring Clouds][soaring clouds] - Allows changing the height at which clouds appear.  
  - Available for: fabric: 1.15 -> 1.16  

#### Zoom

- [Camera Utils][camera utils] - Additional features concerning the player's camera.  
  - Available for: fabric: 1.17 -> 1.21.1, quilt: 1.17 -> 1.21.1  
- [Logical Zoom][logical zoom] - Super simple zoom key for Minecraft.  
  - Available for: fabric: 1.15 -> 1.21.1, quilt: 1.15 -> 1.20.4  
- [Quick Spyglasser][quick spyglasser] - Adds a client-side keybind for using a spyglass anywhere in your inventory.  
  - Available for: fabric: 1.17  
- [Zoomify][zoomify] - A rather simple zoom mod with moderate customizability.  
  - Available for: fabric: 1.18 -> 1.21, quilt: 1.18.2 -> 1.20.1, 1.20.5  

[cull leaves]: https://modrinth.com/mod/cull-leaves "Cull Leaves Modrinth page"
[cull particles]: https://curseforge.com/minecraft/mc-mods/cull-particles-fabric "Cull Particles CurseForge page"
[dynamic fps]: https://modrinth.com/mod/dynamic-fps "Dynamic FPS Modrinth page"
[enhanced block entities]: https://modrinth.com/mod/ebe "Enhanced Block Entities Modrinth page"
[entityculling]: https://modrinth.com/mod/entityculling "EntityCulling Modrinth page"
[fps reducer]: https://modrinth.com/mod/fps-reducer "FPS Reducer Modrinth page"
[sodium]: https://modrinth.com/mod/sodium "Sodium Modrinth page"
[krypton]: https://modrinth.com/mod/krypton "Krypton Modrinth page"
[lazydfu]: https://modrinth.com/mod/lazydfu "LazyDFU Modrinth page"
[lithium]: https://modrinth.com/mod/lithium "Lithium Modrinth page"
[phosphor]: https://modrinth.com/mod/phosphor "Phosphor Modrinth page"
[starlight]: https://modrinth.com/mod/starlight "Starlight Modrinth page"
[animatica]: https://modrinth.com/mod/animatica "Animatica Modrinth page"
[block entity extended rendering]: https://modrinth.com/mod/beer "Block Entity Extended Rendering Modrinth page"
[chime]: https://modrinth.com/mod/chime "Chime Modrinth page"
[cit resewn]: https://modrinth.com/mod/cit-resewn "CIT Resewn Modrinth page"
[clear skies]: https://modrinth.com/mod/clear-skies "Clear Skies Modrinth page"
[colormatic]: https://modrinth.com/mod/colormatic "Colormatic Modrinth page"
[connected block textures]: https://github.com/TwilightFlower/connected-block-textures "Connected Block Textures GitHub page"
[continuity]: https://modrinth.com/mod/continuity "Continuity Modrinth page"
[custom entity models (cem)]: https://modrinth.com/mod/cem "Custom Entity Models (CEM) Modrinth page"
[custom gui]: https://modrinth.com/mod/customgui "Custom GUI Modrinth page"
[entity model features]: https://modrinth.com/mod/entity-model-features "Entity Model Features Modrinth page"
[entity texture features]: https://modrinth.com/mod/entitytexturefeatures "Entity Texture Features Modrinth page"
[fabricskyboxes]: https://modrinth.com/mod/fabricskyboxes "FabricSkyboxes Modrinth page"
[jmx]: https://modrinth.com/mod/imx "JMX Modrinth page"
[jsonem (json entity models)]: https://modrinth.com/mod/jsonem "JsonEM (Json Entity Models) Modrinth page"
[lambdabettergrass]: https://modrinth.com/mod/lambdabettergrass "LambdaBetterGrass Modrinth page"
[lambdynamiclights]: https://modrinth.com/mod/lambdynamiclights "LambDynamicLights Modrinth page"
[more block predicates]: https://modrinth.com/mod/mbp "More Block Predicates Modrinth page"
[moremcmeta]: https://modrinth.com/mod/moremcmeta "MoreMcmeta Modrinth page"
[optigui]: https://modrinth.com/mod/optigui "OptiGUI Modrinth page"
[polytone]: https://modrinth.com/mod/polytone "Polytone Modrinth page"
[transparent]: https://modrinth.com/mod/transparent "Transparent Modrinth page"
[varied mob textures]: https://curseforge.com/minecraft/mc-mods/varied-mob-textures "Varied Mob Textures CurseForge page"
[custom splash screen]: https://modrinth.com/mod/custom-splash-screen "Custom Splash Screen Modrinth page"
[dark loading screen]: https://modrinth.com/mod/dark-loading-screen "Dark Loading Screen Modrinth page"
[quilt loading screen]: https://modrinth.com/mod/quilt-loading-screen "Quilt Loading Screen Modrinth page"
[splash]: https://curseforge.com/minecraft/mc-mods/splash "Splash CurseForge page"
[canvas renderer]: https://modrinth.com/mod/canvas "Canvas Renderer Modrinth page"
[iris]: https://modrinth.com/mod/iris "Iris Modrinth page"
[clearview]: https://curseforge.com/minecraft/mc-mods/clearview "ClearView CurseForge page"
[custom fog]: https://modrinth.com/mod/custom-fog "Custom Fog Modrinth page"
[fog control]: https://modrinth.com/mod/fog-control "Fog Control Modrinth page"
[nofog]: https://modrinth.com/mod/no_fog "NoFog Modrinth page"
[fabrishot]: https://modrinth.com/mod/fabrishot "Fabrishot Modrinth page"
[no telemetry]: https://modrinth.com/mod/no-telemetry "No Telemetry Modrinth page"
[resolution control]: https://curseforge.com/minecraft/mc-mods/resolution-control "Resolution Control CurseForge page"
[resolutioncontrol+]: https://modrinth.com/mod/resolution-control-plus "ResolutionControl+ Modrinth page"
[raised clouds]: https://modrinth.com/mod/raised-clouds "Raised Clouds Modrinth page"
[soaring clouds]: https://curseforge.com/minecraft/mc-mods/soaring-clouds "Soaring Clouds CurseForge page"
[camera utils]: https://modrinth.com/mod/camera-utils "Camera Utils Modrinth page"
[logical zoom]: https://modrinth.com/mod/logical-zoom "Logical Zoom Modrinth page"
[quick spyglasser]: https://curseforge.com/minecraft/mc-mods/quick-spyglasser "Quick Spyglasser CurseForge page"
[zoomify]: https://modrinth.com/mod/zoomify "Zoomify Modrinth page"


### Extras

The mods listed below are not part of the OptiFine alternatives directly but those are still nice to have.

- [Ears] - Faithful fancy fashion features for fuzzy folk. It offers a lot of skin customization options, directly encoded into the skin file uploaded to Mojang. A very good alternative to express yourself than restrictive capes.
  - Available for: b1.7.3, 1.2.5, 1.4.7 -> 1.20.4, Not so Seecret Saturday (a1.1.2), New Frontier Craft (b1.7.3)
- [DashLoader] - Attempts to improve loading times by caching the game's content. May be incompatible with some of the mods in this list.
  - Available for: 1.16 -> 1.20.1
- [Entity View Distance] - This mods allows more precise manipulation of entity view distance on client and server 
  - Available for: 1.17 -> 1.20.4
- [FerriteCore] - Memory usage optimizations.
  - Available for: 1.16 -> 1.20.4
- [Hydrogen] - Reduces the memory usage of the game in more modded scenarios.
  - Available for: 1.16 -> 1.17
- [Overworld Two] provides an alternative optimized world generator for overworld and nether. Much faster than Vanilla but isn't identical to Vanilla.
  - Available for: 1.16
- [Sodium Extra] - Adds features that should not be in Sodium.
  - Available for: 1.16 -> 1.20.4
- [Reese's Sodium Options] - Alternative Options Menu for Sodium with intention of improving UX.
  - Available for: 1.16 -> 1.20.4

[Ears]: https://ears.unascribed.com/ "Ears Website"
[FerriteCore]: https://modrinth.com/mod/ferrite-core "FerriteCore Modrinth page"
[Entity View Distance]: https://modrinth.com/mod/entity-view-distance "Entity View Distance Curseforge page"
[Hydrogen]: https://modrinth.com/mod/hydrogen "Hydrogen Modrinth page"
[Krypton]: https://modrinth.com/mod/krypton "Krypton Modrinth page"
[DashLoader]: https://modrinth.com/mod/dashloader "DashLoader Modrinth page"
[Overworld Two]: https://www.curseforge.com/minecraft/mc-mods/overworld-two "Overworld Two Curseforge Page"
[Sodium Extra]: https://modrinth.com/mod/sodium-extra "Sodium Extra Modrinth page"
[Reese's Sodium Options]: https://modrinth.com/mod/reeses-sodium-options "Reese's Sodium Options Modrinth page"

### No Dynamic FOV

**As of 1.16.2 and above, this is now a vanilla feature under the accessibility settings. If you are playing in 1.16.2 or above, the mods for this feature are irrelevant.**

These are client-only mods that prevent Minecraft from changing the FOV in all situations.

- [motioNO] - disables dynamic FOV.
- [FovLock] - adds dynamic FOV lock button.

[motioNO]: https://www.curseforge.com/minecraft/mc-mods/motiono "MotioNo CurseForge page"
[FovLock]: https://github.com/ChloeDawn/FovLock "FovLock GitHub page"

## Compatibility

Sodium and Canvas Renderer are incompatible.

Some mods require the Fabric Renderer API to work, Canvas supports it, but Sodium will not support it by default, [Indium] is required to support it.

- [Indium] - Adds support of the Fabric Renderer API to [Sodium](https://modrinth.com/mod/sodium).
  - Available for: 1.16 -> 1.20.4

[Indium]: https://modrinth.com/mod/indium "Indium Modrinth Page"

## Missing

- Custom entity models (might come in Vanilla to an unknown date?)
  currently incompletely replaced: current existing implementations are very hardcoded to Vanilla entities

## Need help?

If you need help about Sodium, Lithium, Phosphor (any of CaffeineMC's mod to be short), [please check out CaffeineMC's discord server](https://jellysquid.me/discord).

If you need help related to LambDynamicLights, LambdaBetterGrass, or Inspecio, if you don't want to post in the comments a suggestion you can check out [my own discord server](https://discord.lambdaurora.dev)

## Other lists

 - [Useful Fabric server-side mods](https://github.com/comp500/fabric-serverside-mods/blob/main/README.md)
