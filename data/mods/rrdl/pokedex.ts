export const Pokedex: {[k: string]: ModdedSpeciesData} = {
	tyrogunk: {
		num: -10000,
		name: "Tyrogunk",
		types: ["Poison", "Fighting"],
		baseStats: {hp: 83, atk: 96, def: 75, spa: 96, spd: 75, spe: 85},
		abilities: {0: "Prankster", 1: "Sheer Force", H: "Illusion"},
		heightm: 0.7,
		weightkg: 22,
		color: "Purple",
		eggGroups: ["Undiscovered"]
	},
	clefpex: {
		num: -10001,
		name: "Clefpex",
		types: ["Poison", "Fairy"],
		baseStats: {hp: 85, atk: 50, def: 100, spa: 80, spd: 105, spe: 80},
		abilities: {0: "Regenerator", 1: "Magic Guard", H: "Neutralizing Gas"},
		heightm: 2,
		weightkg: 54.5,
		color: "Pink",
		eggGroups: ["Undiscovered"]
	},
	luninja: {
		num: -10002,
		name: "Luninja",
		types: ["Fighting", "Water"],
		baseStats: {hp: 72, atk: 85, def: 67, spa: 95, spd: 71, spe: 110},
		abilities: {0: "Adaptability", 1: "Prankster", H: "Technician"},
		heightm: 1.35,
		weightkg: 47,
		color: "Blue",
		eggGroups: ["Undiscovered"]
	},
}