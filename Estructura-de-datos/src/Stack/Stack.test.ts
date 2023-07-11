import { Stack, toBase, toBinary } from "./Stack";

describe("Pila", () => {
  describe("Ejercicio 1: Crear una pila y crear metodos push, pop y size", () => {
    test("Metodo push", () => {
      const numbers = new Stack();
      expect(numbers.push("Hola!")).toBe(1);
    });
    test("Metodo pop", () => {
      const numbers = new Stack();
      numbers.push("Hola");
      expect(numbers.pop()).toBe("Hola");
    });
    test("Metodo size", () => {
      const numbers = new Stack();
      numbers.push("Hola");
      expect(numbers.size()).toBe(1);
    });
  });

  test("Ejercicio 2: Utilizar la clase Stack para convertir decimales a numeros binarios", () => {
    expect(toBinary(5)).toEqual("101");
  });

  describe("Ejercicio 3: Utilizar la clase Stack para convertir decimales a otras bases", () => {
    test("La base esta comprendida entre 2 y 36", () => {
      expect(toBase(5, 122)).toEqual("244");
    });
    test("La base no esta comprendida entre 2 y 36", () => {
      expect(() => toBase(37, 122)).toThrow("La base debe estar comprendida entre el 2 y el 32");
    });
  });
});
