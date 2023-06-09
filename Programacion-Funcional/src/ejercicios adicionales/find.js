import { characters } from '../data.js'

function find(arr, func) {
	for(let i = 0; i < arr.length; i++) {
		if(func(arr[i])) {
			return arr[i]
		}
	}
}

const character = find(characters, (character) => character.name.includes('Leia'))

console.log(character)
