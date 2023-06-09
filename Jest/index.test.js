const { fizzBuzz } = require("./src/fizzbuzz");
const { isLeapYear } = require("./src/ejercicio-1.2");
const { normalizeADN } = require("./src/ejercicio-1.3");
const { sumPositiveNumbers } = require("./src/ejercicio-1.4");
const { firstConsecutiveLetter } = require("./src/ejercicio-1.5");
const { checkMatrix } = require("./src/ejercicio-1.6");
const { lookup } = require("./src/ejercicio-1.7");
const { addToCart, setPrice } = require("./src/ejercicio-1.8");

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

describe("Ejercicio 1.2 - Validar si un año es bisiesto", () => {
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

describe("Ejercicio 1.3 - Normalizacion de cadenas de ADN", () => {
  it("El argumento es una cadena vacia", () => {
    expect(normalizeADN("")).toBe("");
  });

  it("El argumento es una cadena canonica", () => {
    expect(normalizeADN("CTAGGGTA")).toBe("CTAGGGTA");
  });

  it("El argumento NO es una cadena canonica", () => {
    expect(normalizeADN("DCETWAGGQGBHTA")).toBe("CTAGGGTA");
  });

  it("El argumento NO es una cadena canonica y tiene letras minuscula", () => {
    expect(normalizeADN("DCETabWAGGQaGBgHxTA")).toBe("CTAGGGTA");
  });
});

describe("Ejercicio 1.4 - Suma de numeros positivos", () => {
  it("El argumento es un arreglo vacio", () => {
    expect(sumPositiveNumbers([])).toBe(0);
  });

  it("El argumento es un arreglo de numeros", () => {
    expect(sumPositiveNumbers([1, 2, 3, 4])).toBe(10);
  });

  it("El argumento es un arreglo de numeros y letras", () => {
    expect(sumPositiveNumbers([1, 2, "3", "4", "a", "b"])).toBe(10);
  });
});

describe("Ejercicio 1.5 - Encontrar primer letra repetida consecutivamente", () => {
  it("El argumento es una cadena con una letra repetida", () => {
    expect(firstConsecutiveLetter("asdfgqwwert")).toBe(6);
  });

  it("El argumento es una cadena con una letra repetida", () => {
    expect(firstConsecutiveLetter("asdfgqwwert")).toBe(6);
  });

  it("El argumento es una cadena con una letra repetida en la ultima posicion", () => {
    expect(firstConsecutiveLetter("asdfgqwertt")).toBe(9);
  });

  it("El argumento es una cadena con una letra repetida en la primer posicion", () => {
    expect(firstConsecutiveLetter("aasdfgqwert")).toBe(0);
  });

  it("El argumento es una cadena con espacios", () => {
    expect(firstConsecutiveLetter("  a sdfgg  qwert ")).toBe(4);
  });

  it("El argumento es una cadena con una letra repetida en mayuscula", () => {
    expect(firstConsecutiveLetter("asdfgGqwert ")).toBe(4);
  });
});

describe("Ejercicio 1.6 - Contar maxima cantidad de 'unos' consecutivos en un arreglo", () => {
  it("El argumento es un arreglo que contiene 0 y 1", () => {
    expect(checkMatrix([0, 0, 0, 0, 1, 1, 1, 0, 0])).toBe(3);
  });

  it("El argumento es un arreglo que contiene 0 y 1 como cadenas ", () => {
    expect(checkMatrix([0, 0, 0, "0", "1", 1, "1", 0, 0])).toBe(3);
  });
});

describe("lookup()", () => {
  it("lookup(<login>, 'likes') should return likes for the specified user.", () => {
    const actual = lookup("norvig", "likes");
    const expected = ["AI", "Search", "NASA", "Mars"];

    expect(actual).toEqual(expected);
  });

  it("lookup(<login>, 'lastName') should return the last name for the specified user", () => {
    const actual = lookup("knuth", "lastName");
    const expected = "Knuth";

    expect(actual).toEqual(expected);
  });

  it("with unknown user should throw an error with the correct message", () => {
    expect(() => {
      lookup("nobody", "likes");
    }).toThrow(/Could not find user/);
  });

  it("with unknown property should throw an error the correct message", () => {
    expect(() => {
      lookup("mfowler", "noprop");
    }).toThrow(/Could not find property/);
  });
});

describe("setPrice()", () => {
  it("should set the price in the given item object, immutably.", () => {
    const item = {
      name: "test",
      price: 30,
    };
    const copy = Object.assign({}, item);

    const actual = setPrice(item, 50);
    const expected = {
      name: "test",
      price: 50,
    };

    expect(actual).toEqual(expected);

    expect(item).toEqual(copy);
  });
});

describe("addToCart()", () => {
  it("should add item to cart, immutably", () => {
    const originalCart = [];
    const item = {
      name: "Toy",
      price: 30,
    };
    const copy = originalCart.slice();

    const actual = addToCart(originalCart, item);
    const expected = [item];

    expect(actual).toEqual(expected);
    expect(originalCart).toEqual(copy);
  });
});
