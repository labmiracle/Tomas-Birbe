function firstConsecutiveLetter(word) {
  const normalizeWord = word.toLowerCase().replaceAll(" ", "");
  for (let i = 0; i < normalizeWord.length - 1; i++) {
    if (normalizeWord[i] === normalizeWord[i + 1]) {
      return i;
    }
  }
  return -1;
}

module.exports = {
  firstConsecutiveLetter,
};
