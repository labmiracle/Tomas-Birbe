import { characters } from './data.js';

const everyHaveBlueEyes = characters.every(
  (character) => character.eye_color === 'blue'
);

const everyHaveMassHigherThan40 = characters.every(
  (character) => character.mass > 40
);

const everyHaveHeightLessThan200 = characters.every(
  (character) => character.height < 200
);

const everyAreMale = characters.every(
  (character) => character.gender === 'male'
);

console.log({
  everyHaveBlueEyes,
  everyHaveMassHigherThan40,
  everyHaveHeightLessThan200,
  everyAreMale,
});
