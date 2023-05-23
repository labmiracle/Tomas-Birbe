function isLeapYear(year) {
  if (typeof year === "string") {
    throw new Error("El año debe ser un numero");
  }
  return (year % 100 !== 0 || year % 400 === 0) && year % 4 === 0;
}

module.exports = {
  isLeapYear,
};
