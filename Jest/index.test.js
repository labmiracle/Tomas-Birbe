const { fizzBuzz } = require("./fizzbuzz");

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
