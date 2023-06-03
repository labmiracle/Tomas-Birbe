import { characters } from './data.js';

const thereIsSomeMale = characters.some(
  (character) => character.gender === 'male'
);

const thereIsSomeBlueEyes = characters.some(
  (character) => character.eye_color === 'blue'
);

const thereIsSomeHeightHigherThan200 = characters.some(
  (character) => character.height > 200
);

const thereIsSomeMassLesserThan50 = characters.some(
  (character) => character.mass < 50
);

console.log({
  thereIsSomeMale,
  thereIsSomeBlueEyes,
  thereIsSomeHeightHigherThan200,
  thereIsSomeMassLesserThan50,
});
