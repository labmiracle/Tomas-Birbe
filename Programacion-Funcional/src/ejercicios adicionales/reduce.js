import { characters } from '../data.js';
export function reduce(arr, func, initialState) {
  let acc = initialState;
  for (let i = 0; i < arr.length; i++) {
    acc = func(acc, arr[i]);
  }
  return acc;
}

const totalMass = reduce(characters,
  (acumulatedMass, character) => acumulatedMass + Number(character.mass),
  0
);

const totalHeight = reduce(characters,
  (acumulatedHeight, character) => acumulatedHeight + Number(character.height),
  0
);

const totalLenghtOfCharactersName = reduce(characters,
  (accumulatedCharacters, character) =>
    accumulatedCharacters + character.gender.length,
  0
);

const totalLenghtOfCharacterEyes = reduce(characters,
  (accumulatedCharacters, character) =>
    accumulatedCharacters + character.eye_color.length,
  0
);

console.log({
  totalMass,
  totalHeight,
  totalLenghtOfCharactersName,
  totalLenghtOfCharacterEyes,
});
