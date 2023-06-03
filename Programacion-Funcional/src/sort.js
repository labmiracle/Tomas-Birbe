import { characters } from './data.js';

const sortedByName = characters.slice().sort((a, b) => {
  console.log(a.name, b.name);
  if (a.name > b.name) {
    return 1;
  }

  if (a.name < b.name) {
    return -1;
  }
  return 0;
});

const sortedByMass = characters
  .slice()
  .sort((a, b) => Number(a.mass) - Number(b.mass));

const sortedByHeight = characters
  .slice()
  .sort((a, b) => Number(a.height) - Number(b.height));

const sortedByGender = characters.slice().sort((a, b) => {
  console.log(a.gender, b.gender);
  if (a.gender > b.gender) {
    return 1;
  }

  if (a.gender < b.gender) {
    return -1;
  }
  return 0;
});
console.log({ sortedByName, sortedByMass, sortedByHeight, sortedByGender });
