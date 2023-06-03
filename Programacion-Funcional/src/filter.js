import { characters } from './data.js';

const massHigherThan100 = characters.filter(
  (character) => Number(character.mass) >= 100
);

const heigthLesserThan200 = characters.filter(
  (character) => Number(character.height) >= 200
);

const maleCharacters = characters.filter(
  (character) => character.gender === 'male'
);
const femaleCharacters = characters.filter(
  (character) => character.gender === 'female'
);

console.log({
  massHigherThan100,
  heigthLesserThan200,
  maleCharacters,
  femaleCharacters,
});
