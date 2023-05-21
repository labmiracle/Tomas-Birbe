const { fizzBuzz } = require("./src/fizzbuzz");
const { isLeapYear } = require("./src/ejercicio.1.2");

describe("FizzBuzz", () => {
  it("fizzBuzz recibe un numero divisible por 5 y por 3", () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
  });

  it("fizzBuzz recibe un numero divisible por 3", () => {
    expect(fizzBuzz(9)).toBe("Fizz");
  });

  it("fizzBuzz recibe un numero divisible por 5", () => {
    expect(fizzBuzz(20)).toBe("Buzz");
  });

  it("fizzBuzz recibe el 0 como argumento", () => {
    const num = 0;

    expect(fizzBuzz(num)).toBe(num);
  });

  it("fizzBuzz recibe una cadena", () => {
    expect(() => fizzBuzz("a")).toThrow("El argumento debe ser un numero");
  });
});

describe("Ejercicio 1.2", () => {
  it("El argumento es un año bisiesto", () => {
    expect(isLeapYear(2024)).toBeTruthy();
  });

  it("El argumento es un año bisiesto secular", () => {
    expect(isLeapYear(2000)).toBeTruthy();
  });

  it("El argumento no es un año bisiesto", () => {
    expect(isLeapYear(1989)).toBeFalsy();
  });

  it("El argumento no es un año bisiesto y es secular", () => {
    expect(isLeapYear(1900)).toBeFalsy();
  });

  it("El argumento es una cadena", () => {
    expect(() => isLeapYear("Hola")).toThrow("El año debe ser un numero");
  });
});
