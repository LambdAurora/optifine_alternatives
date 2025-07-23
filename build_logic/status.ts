export interface Status {
	readonly content: string;
	readonly color: string;
}

export const UNMAINTAINED: Status = {
	content: "Unmaintained",
	color: "#b3261e",
};

export const CIT: Status = {
	content: "Mostly available in Vanilla since 1.21.4",
	color: "#fc6f00",
};

export const LIGHT: Status = {
	content: "Modern versions don't need light engine performance mods.",
	color: "#fc6f00",
};
