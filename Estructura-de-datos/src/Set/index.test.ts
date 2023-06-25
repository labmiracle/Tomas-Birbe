import { isThereDuplicates, toUniqueValues } from "./index";

describe("Set", () => {
  test("Ejercicio 1: Verifique si hay duplicados en un arreglo de enteros usando Set", () => {
    const numbers = [1, 2, 3, 4, 5, 5, 5, 6, 7, 7, 8];
    const uniqueNumbers = [1, 2, 3, 4, 5, 6, 7, 8];

    expect(isThereDuplicates(numbers)).toBe(true);
    expect(isThereDuplicates(uniqueNumbers)).toBe(false);
  });

  test("Ejercicio 2: En base a 2 arreglos de enteros, devolver 1 con los valores unicos de ambos", () => {
    const numbers1 = [1, 2, 3, 4, 5, 5, 5, 6, 7, 7, 8, 9, 10];
    const numbers2 = [6, 7, 8, 9, 10, 11, 12, 12, 13, 14];
    expect(toUniqueValues(numbers1, numbers2)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]);
  });
});
