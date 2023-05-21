function normalizeADN(ADN) {
  let canonicChars = "CTAG";

  if (ADN.length === 0) {
    return "";
  }
  let wellFormedADN = "";
  for (let letter of ADN) {
    if (canonicChars.includes(letter)) {
      wellFormedADN += letter;
    }
  }

  return wellFormedADN;
}

module.exports = {
  normalizeADN,
};
