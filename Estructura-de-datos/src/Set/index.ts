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
