import Mod from "../build_src/mod.mjs";

export default new Mod(
	"LazyDFU",
	"astei",
	"Makes the initialization of DataFixerUpper \"lazy\". "
	+ "DataFixerUpper (or DFU for short) is the system used by Minecraft to convert old worlds to the current version you're running, "
	+ "in Vanilla it's initialized at startup and is slow (and eats a lot of resources). This mod delays the initialization of DFU by initializing only when needed, "
	+ "if you're playing only on multiplayer it'll never get initialized for example.",
)
.add_version(14, 15, 16, 17, 18, { id: 16, note: "Forge" }, { id: 17, note: "Forge" }, { id: 18, note: "Forge" })
.add_category("Performance", "General")
.add_link(
	{ host: "curseforge" },
	{ host: "curseforge", params: { namespace: "lazy-dfu-forge", modloader: "Forge" } },
	{ host: "modrinth" },
	{ host: "github" }
);
