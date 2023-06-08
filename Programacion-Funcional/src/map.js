import { characters } from './data.js';

const names = characters.map((character) => character.name);
const heights = characters.map((character) => character.height);
const namesAndHeights = characters.map((character) => ({
  name: character.male,
  height: character.height,
}));

console.log({ names, heights, namesAndHeights });
