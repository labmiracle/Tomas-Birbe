import { characters } from '../data.js';

export function map(arr, func) {
	let arrClone = Array(arr.length)
	for (let i = 0; i < arr.length; i++) {
		arrClone[i] = func(arr[i])
	}

	return arrClone
};

const names = map(characters,(character) => character.name);
const heights = map(characters,(character) => character.height);
const namesAndHeights = map(characters,(character) => ({
  name: character.name,
  height: character.height,
}));

console.log({ names, heights, namesAndHeights });

