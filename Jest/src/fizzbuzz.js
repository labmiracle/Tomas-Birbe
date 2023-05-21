function fizzBuzz(num) {
  if (typeof num !== "number") {
    throw new Error("El argumento debe ser un numero");
  }
  if (num === 0) {
    return num;
  }

  if (num % 5 === 0 && num % 3 === 0) {
    return "FizzBuzz";
  } else if (num % 3 === 0) {
    return "Fizz";
  } else if (num % 5 === 0) {
    return "Buzz";
  }

  return num;
}

module.exports = {
  fizzBuzz,
};
