export function isThereDuplicates(arr: number[]) {
  const uniquesArr = new Set(arr);

  if (uniquesArr.size === arr.length) {
    return false;
  }

  return true;
}

export function toUniqueValues(arr1: number[], arr2: number[]) {
  const unionOfArrays = new Set([...arr1, ...arr2]);

  return Array.from(unionOfArrays);
}

const numbers1 = [1, 2, 3, 4, 5, 5, 5, 6, 7, 7, 8, 9, 10];
const numbers2 = [6, 7, 8, 9, 10, 11, 12, 12, 13, 14];

console.log(toUniqueValues(numbers1, numbers2));
