function sumPositiveNumbers(array) {
  return array.reduce((acc, element) => {
    const elementAsNumber = Number(element);
    if (!isNaN(elementAsNumber) && elementAsNumber > 0) {
      return (acc += elementAsNumber);
    }
    return acc;
  }, 0);
}

module.exports = {
  sumPositiveNumbers,
};
