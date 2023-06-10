import { characters } from '../data.js';

export function filter(arr, func) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

const massHigherThan100 = filter(
  characters,
  (character) => Number(character.mass) >= 100
);

const heigthLesserThan200 = filter(
  characters,
  (character) => Number(character.height) >= 200
);

const maleCharacters = filter(
  characters,
  (character) => character.gender === 'male'
);
const femaleCharacters = filter(
  characters,
  (character) => character.gender === 'female'
);

console.log({
  massHigherThan100,
  heigthLesserThan200,
  maleCharacters,
  femaleCharacters,
});
