# OptiFine Alternatives

## Why?

OptiFine was originally a great mod offering many quality of life improvements for the player in the beginning. However, over the years, its benefits have dwindled and has caused many issues for modders. This is due to Minecraft's codebase improving over the years and OptiFine's aggressiveness towards replacing entire swaths of code while being closed source making it very difficult to figure out why OptiFine has broken another modder's mod. 
Also worth noting that OptiFine natively doesn't support Fabric and it's hard to maintain OptiFabric.

In the modern Minecraft era, with Fabric's community effort, modders have begun to create alternatives for most of OptiFine's features to allow players to maintain better performance, better mod compatibility, and better support.

[OptiFabric: A note about the 1.16 crashes][optifabric_issue]

[optifabric_issue]: https://github.com/modmuss50/OptiFabric/issues/242

## This list

This list will list recommended OptiFine alternatives by me (LambdAurora), so it has some requirements for mods to be listed here:
 - They must be publicly available, if it's only accessible through Discord they are not eligible.
 - Mods must respect the Minecraft's EULA.
 - Mods must not refer to a cheat client.
 - Mods that change gameplay in a way (e.g. zoom) that have a way for servers to disable them will be favored.

This list now has a fancy URL: https://lambdaurora.dev/optifine_alternatives

### Contribute

You can contribute to this list by opening a pull request on the `data` branch via [GitHub](https://github.com/LambdAurora/optifine_alternatives).

## Alternatives

### Performance

#### Client

- [Cull Leaves] - Adds culling to leaf blocks, providing a huge performance boost over vanilla. Similar to OptiFine's Smart Leaves feature.  
  - Available for: 1.16 -> 1.18  
- [Cull Particles] - Don't render particles that can't be seen. Unneeded with Sodium.  
  - Available for: 1.15 -> 1.18  
- [Dynamic FPS] - Improve performance when Minecraft is in the background.  
  - Available for: 1.14 -> 1.18  
- [EntityCulling] - Using async path-tracing to hide (Block-)Entities that are not visible.  
  - Available for: 1.16 -> 1.18  
- [Sodium] - Modern rendering engine and client-side optimization mod for Minecraft.  
  - Available for: 1.16 -> 1.17, 1.18 (Alpha)  

#### General

- [LazyDFU] - Makes the initialization of DataFixerUpper "lazy". DataFixerUpper (or DFU for short) is the system used by Minecraft to convert old worlds to the current version you're running, in Vanilla it's initialized at startup and is slow (and eats a lot of resources). This mod delays the initialization of DFU by initializing only when needed, if you're playing only on multiplayer it'll never get initialized for example.  
  - Available for: 1.14 -> 1.18, 1.16 -> 1.18 (Forge)  
- [Lithium] - No-compromises game logic/server optimization mod.  
  - Available for: 1.16 -> 1.18  
- [Phosphor] - No-compromises lighting engine optimization mod.  
  - Available for: 1.12 (Forge), 1.15 -> 1.18  
- [Starlight] - Rewrites the light engine to fix lighting performance and lighting errors. Uses a custom format for light storage.  
  - Available for: 1.17 -> 1.18  

### Cosmetic

- [Animatica] - A mod implementing the OptiFine/MCPatcher animated texture format.  
  - Available for: 1.17  
- [Chime] - Adds predicates for more interactive item models, CIT replacement with a custom format.  
  - Available for: 1.16  
- [CIT Resewn] - Re-implements MCPatcher's CIT (custom item textures from optifine resource packs)  
  - Available for: 1.17 -> 1.18  
- [Clear Skies] - Horizon and fog match the sky color. True blue skies!  
  - Available for: 1.15 -> 1.18, 1.16 (Forge)  
- [Colormatic] - An independent implementation of the custom colors mod for Minecraft.  
  - Available for: 1.14 -> 1.18  
- [Connected Block Textures] - An implementation of the MCPatcher/Optifine connected textures format on the Fabric modloader. Unmaintained.  
  - Available for: 1.16  
  - Requires [Fabric Renderer API](#compatibility "More information.")  
- [Continuity] - A Fabric mod that allows for efficient connected textures.  
  - Available for: 1.17 -> 1.18  
  - Requires [Fabric Renderer API](#compatibility "More information.")  
- [Custom Entity Models (CEM)] - An implementation of custom entity models heavily based off of Optifine's format that aims to achieve feature parity with Optifine's custom entity models.  
  - Available for: 1.16 -> 1.18  
- [FabricSkyboxes] - Allows resource packs to define custom skyboxes. OptiFine format is not compatible by default, converters are available.  
  - Available for: 1.16 -> 1.18  
- [LambdaBetterGrass] - Adds better grass and snow to the game.  
  - Available for: 1.16 -> 1.18  
  - Requires [Fabric Renderer API](#compatibility "More information.")  
- [LambDynamicLights] - Adds dynamic lighting to the game.  
  - Available for: 1.15 -> 1.18  
- [MoreMcmeta] - Animate almost any Minecraft texture with more options.  
  - Available for: 1.16 -> 1.17  
- [Transparent] - Allows resource packs to make entities support transparency.  
  - Available for: 1.15 -> 1.18  
- [Varied Mob Textures] - This mod allows the resource packs creator to have multiple randomized textures for the same mob. Uses custom format, OptiFine-based resource packs will need conversion.  
  - Available for: 1.16  

#### Splash Screen

- [Custom Splash Screen] - Change Minecraft's loading screen to your liking! Completely configurable!  
  - Available for: 1.16 -> 1.18  
- [Dark Loading Screen] - A simple mod to make the loading screen darker.  
  - Available for: 1.15 -> 1.18  
- [Quilt Loading Screen] - A loading screen based off of The Quilt Community's server banner.  
  - Available for: 1.16 -> 1.18  
- [Splash] - Splash is a Fabric mod that allows you to customize the colors of your splash screen.  
  - Available for: 1.16 -> 1.17  

### Shaders

- [Canvas Renderer] - A new rendering engine. Incompatible with Sodium.  
  - Available for: 1.16 (Abandoned), 1.17 -> 1.18  
- [Iris] - A new shaders mod for Minecraft intended to be compatible with existing ShadersMod/Optifine shaders.  
  - Available for: 1.16 -> 1.18  

### Fog

- [ClearView] - Controls which kinds of fogs are shown.  
  - Available for: 1.15 -> 1.16  
- [Custom Fog] - A mod allowing you to customize the appearance of fog in your world.  
  - Available for: 1.15 -> 1.17  
- [Fog Control] - Allows the user to adjust the (client) distance at which fogs render or disable them completely.   
  - Available for: 1.17  
- [FogYeet] - Small mod for 1.15 to remove fog.  
  - Available for: 1.15  
- [NoFog] - A simple client-side mod supporting both forge and fabric that removes all fog. (ARR)  
  - Available for: 1.16 -> 1.18  

### Utility

- [Fabrishot] - Take insanely large screenshots because why not?  
  - Available for: 1.16 -> 1.18  
- [Resolution Control] - Allows you to set render resolutions and take large screenshots.  
  - Available for: 1.14 -> 1.16  
- [ResolutionControl+] - Allows you to set render resolutions and take large screenshots.  
  - Available for: 1.16  

#### Cloud Height

- [Raised Clouds] - Allows changing the height at which clouds appear.  
  - Available for: 1.16  
- [Soaring Clouds] - Allows changing the height at which clouds appear.  
  - Available for: 1.15 -> 1.16  

#### Zoom

- [Logical Zoom] - Super simple zoom key for Minecraft.  
  - Available for: 1.15 -> 1.18  
- [Ok Zoomer] - Adds a highly-configurable zoom key for Fabric. The zoom is yours!  
  - Available for: 1.14 -> 1.18  

[Cull Leaves]: https://curseforge.com/minecraft/mc-mods/cull-leaves "Cull Leaves CurseForge page"
[Cull Particles]: https://curseforge.com/minecraft/mc-mods/cull-particles-fabric "Cull Particles CurseForge page"
[Dynamic FPS]: https://curseforge.com/minecraft/mc-mods/dynamic-fps "Dynamic FPS CurseForge page"
[EntityCulling]: https://curseforge.com/minecraft/mc-mods/entityculling "EntityCulling CurseForge page"
[Sodium]: https://curseforge.com/minecraft/mc-mods/sodium "Sodium CurseForge page"
[LazyDFU]: https://curseforge.com/minecraft/mc-mods/lazydfu "LazyDFU CurseForge page"
[Lithium]: https://curseforge.com/minecraft/mc-mods/lithium "Lithium CurseForge page"
[Phosphor]: https://curseforge.com/minecraft/mc-mods/phosphor "Phosphor CurseForge page"
[Starlight]: https://curseforge.com/minecraft/mc-mods/starlight "Starlight CurseForge page"
[Animatica]: https://curseforge.com/minecraft/mc-mods/animatica "Animatica CurseForge page"
[Chime]: https://curseforge.com/minecraft/mc-mods/chime-fabric "Chime CurseForge page"
[CIT Resewn]: https://curseforge.com/minecraft/mc-mods/cit-resewn "CIT Resewn CurseForge page"
[Clear Skies]: https://curseforge.com/minecraft/mc-mods/clear-skies "Clear Skies CurseForge page"
[Colormatic]: https://curseforge.com/minecraft/mc-mods/colormatic "Colormatic CurseForge page"
[Connected Block Textures]: https://curseforge.com/minecraft/mc-mods/connected-block-textures "Connected Block Textures CurseForge page"
[Continuity]: https://curseforge.com/minecraft/mc-mods/continuity "Continuity CurseForge page"
[Custom Entity Models (CEM)]: https://curseforge.com/minecraft/mc-mods/custom-entity-models-cem "Custom Entity Models (CEM) CurseForge page"
[FabricSkyboxes]: https://modrinth.com/mod/fabricskyboxes "FabricSkyboxes Modrinth page"
[LambdaBetterGrass]: https://curseforge.com/minecraft/mc-mods/lambdabettergrass "LambdaBetterGrass CurseForge page"
[LambDynamicLights]: https://curseforge.com/minecraft/mc-mods/lambdynamiclights "LambDynamicLights CurseForge page"
[MoreMcmeta]: https://curseforge.com/minecraft/mc-mods/moremcmeta-fabric "MoreMcmeta CurseForge page"
[Transparent]: https://curseforge.com/minecraft/mc-mods/transparent-fabric "Transparent CurseForge page"
[Varied Mob Textures]: https://curseforge.com/minecraft/mc-mods/varied-mob-textures "Varied Mob Textures CurseForge page"
[Custom Splash Screen]: https://curseforge.com/minecraft/mc-mods/custom-splash-screen "Custom Splash Screen CurseForge page"
[Dark Loading Screen]: https://curseforge.com/minecraft/mc-mods/dark-loading-screen "Dark Loading Screen CurseForge page"
[Quilt Loading Screen]: https://modrinth.com/mod/quilt-loading-screen "Quilt Loading Screen Modrinth page"
[Splash]: https://curseforge.com/minecraft/mc-mods/splash "Splash CurseForge page"
[Canvas Renderer]: https://curseforge.com/minecraft/mc-mods/canvas-renderer "Canvas Renderer CurseForge page"
[Iris]: https://curseforge.com/minecraft/mc-mods/irisshaders "Iris CurseForge page"
[ClearView]: https://curseforge.com/minecraft/mc-mods/clearview "ClearView CurseForge page"
[Custom Fog]: https://curseforge.com/minecraft/mc-mods/custom-fog "Custom Fog CurseForge page"
[Fog Control]: https://modrinth.com/mod/fog-control "Fog Control Modrinth page"
[FogYeet]: https://modrinth.com/mod/fogyeet "FogYeet Modrinth page"
[NoFog]: https://curseforge.com/minecraft/mc-mods/nofog "NoFog CurseForge page"
[Fabrishot]: https://curseforge.com/minecraft/mc-mods/fabrishot "Fabrishot CurseForge page"
[Resolution Control]: https://curseforge.com/minecraft/mc-mods/resolution-control "Resolution Control CurseForge page"
[ResolutionControl+]: https://modrinth.com/mod/resolution-control-plus "ResolutionControl+ Modrinth page"
[Raised Clouds]: https://curseforge.com/minecraft/mc-mods/raised-clouds "Raised Clouds CurseForge page"
[Soaring Clouds]: https://curseforge.com/minecraft/mc-mods/soaring-clouds "Soaring Clouds CurseForge page"
[Logical Zoom]: https://curseforge.com/minecraft/mc-mods/logical-zoom "Logical Zoom CurseForge page"
[Ok Zoomer]: https://curseforge.com/minecraft/mc-mods/ok-zoomer "Ok Zoomer CurseForge page"


### Extras

The mods listed below are not part of the OptiFine alternatives directly but those are still nice to have.

- [Ears] - Faithful fancy fashion features for fuzzy folk. It offers a lot of skin customization options, directly encoded into the skin file uploaded to Mojang. A very good alternative to express yourself than restrictive capes.
  - Available for: b1.7.3, 1.2.5, 1.4.7 -> 1.18, Not so Seecret Saturday (a1.1.2), New Frontier Craft (b1.7.3)
- [DashLoader] - Attempts to improve loading times by caching the game's content. May be incompatible with some of the mods in this list.
  - Available for: 1.16 -> 1.18
- [Entity View Distance] - This mods allows more precise manipulation of entity view distance on client and server 
  - Available for: 1.17 -> 1.18
- [FerriteCore] - Memory usage optimizations.
  - Available for: [1.16 -> 1.18][FerriteCore], [1.16 -> 1.18 (Forge)](https://www.curseforge.com/minecraft/mc-mods/ferritecore)
- [Hydrogen] - Reduces the memory usage of the game in more modded scenarios.
  - Available for: 1.16 -> 1.17
- [Krypton] - A mod to optimize the Minecraft networking stack
  - Available for: 1.16 -> 1.18
- [Overworld Two] provides an alternative optimized world generator for overworld and nether. Much faster than Vanilla but isn't identical to Vanilla.
  - Available for: 1.16
- [Sodium Extra] - Adds features that should not be in Sodium.
  - Available for: 1.16 -> 1.18

[Ears]: https://www.curseforge.com/minecraft/mc-mods/ears/ "Ears Curseforge page"
[FerriteCore]: https://modrinth.com/mod/ferrite-core "FerriteCore Modrinth page"
[Entity View Distance]: https://www.curseforge.com/minecraft/mc-mods/entity-view-distance "Entity View Distance Curseforge page"
[Hydrogen]: https://modrinth.com/mod/hydrogen "Hydrogen Modrinth page"
[Krypton]: https://modrinth.com/mod/krypton "Krypton Modrinth page"
[DashLoader]: https://modrinth.com/mod/dashloader "DashLoader Modrinth page"
[Overworld Two]: https://www.curseforge.com/minecraft/mc-mods/overworld-two "Overworld Two Curseforge Page"
[Sodium Extra]: https://modrinth.com/mod/sodium-extra "Sodium Extra Modrinth page"

### No Dynamic FOV

**As of 1.16.2 and above, this is now a vanilla feature under the accessibility settings. If you are playing in 1.16.2 or above, the mods for this feature are irrelevant.**

Those are client-only mod that prevents Minecraft from changing the FOV in all situations.

- [motioNO] - disables dynamic FOV.
- [FovLock] - adds dynamic FOV lock button.

[motioNO]: https://www.curseforge.com/minecraft/mc-mods/motiono "MotioNo CurseForge page"
[FovLock]: https://github.com/ChloeDawn/FovLock "FovLock GitHub page"

## Compatibility

Sodium and Canvas Renderer are incompatible.

Some mods require the Fabric Renderer API to work, Canvas supports it, but Sodium will not support it by default, [Indium] is required to support it.

- [Indium] - Adds support of the Fabric Renderer API to [Sodium].
  - Available for: 1.16 -> 1.18(Alpha)

[Indium]: https://modrinth.com/mod/indium "Indium Modrinth Page"

## Missing

- custom entity models (might come in Vanilla to an unknown date?)
  currently incompletely replaced: current existing implementations are very hardcoded to Vanilla entities
- Fishingline and Lead: custom widths and textures.
- Emissive textures.

## Need help?

If you need help about Sodium, Lithium, Phosphor (any of CaffeineMC's mod to be short), [please check out CaffeineMC's discord server](https://jellysquid.me/discord).

If you need help related to LambDynamicLights, LambdaBetterGrass, or if you don't want to post in the comments a suggestion you can check out [my own discord server](https://discord.lambdaurora.dev)

## Other lists

 - [Useful Fabric server-side mods](https://github.com/comp500/fabric-serverside-mods/blob/main/README.md)
