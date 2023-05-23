function checkMatrix(numbers) {
  let maxOnes = 0;
  let counter = 0;

  for (let i = 0; i < numbers.length; i++) {
    const number = Number(numbers[i]);

    if (number === 1) {
      counter++;
      if (counter >= maxOnes) {
        maxOnes = counter;
      }
    } else {
      counter = 0;
    }
  }

  return maxOnes;
}

module.exports = {
  checkMatrix,
};
