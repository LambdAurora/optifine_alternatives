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

**Warning: this list is under re-construction, some mods may be missing, do not hesitate to open a pull request on the *data* branch!**

## Alternatives

${mods}

### Extras

The mods listed below are not part of the OptiFine alternatives directly but those are still nice to have.

- [Hydrogen] - Reduces the memory usage of the game in more modded scenarios.
  - Available for: 1.16 -> 1.17
- [Krypton] - A mod to optimize the Minecraft networking stack
  - Available for: 1.16 -> 1.18
- [LazyDFU] - Makes the initialization of DataFixerUpper "lazy". DataFixerUpper (or DFU for short) is the system used by Minecraft to convert old worlds to the current version you're running, in Vanilla it's initialized at startup and is slow (and eats a lot of resources). This mod delays the initialization of DFU by initializing only when needed, if you're playing only on multiplayer it'll never get initialized for example.
  - Available for: 1.14 -> 1.18
- [DashLoader] - Attempts to improve loading times by caching the game's content. May be incompatible with some of the mods in this list.
  - Available for: 1.16 -> 1.17
- [Overworld Two] provides an alternative optimized world generator for overworld and nether. Much faster than Vanilla but isn't identical to Vanilla.
  - Available for: 1.16
- [Sodium Extra] - Adds features that should not be in Sodium.
  - Available for: 1.16 -> 1.17

[Hydrogen]: https://modrinth.com/mod/hydrogen "Hydrogen Modrinth page"
[Krypton]: https://modrinth.com/mod/krypton "Krypton Modrinth page"
[LazyDFU]: https://modrinth.com/mod/lazydfu "LazyDFU Modrinth page"
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
  - Available for: 1.16 -> 1.17

[Indium]: https://modrinth.com/mod/indium "Indium Modrinth Page"

## Missing

- custom entity models (might come in Vanilla to an unknown date)
- Fishingline and Lead: custom widths and textures.

## Need help?

If you need help about Sodium, Lithium, Phosphor (any of CaffeineMC's mod to be short), [please check out CaffeineMC's discord server](https://jellysquid.me/discord).

If you need help related to LambDynamicLights, LambdaBetterGrass, or if you don't want to post in the comments a suggestion you can check out [my own discord server](https://discord.lambdaurora.dev)

## Other lists

 - [Useful Fabric server-side mods](https://github.com/comp500/fabric-serverside-mods/blob/main/README.md)
