function plus(b) {
  return function (a) {
    return a + b;
  };
}
function minus(b) {
  return function (a) {
    return a - b;
  };
}
function times(b) {
  return function (a) {
    return a * b;
  };
}
function dividedBy(b) {
  return function (a) {
    return a / b;
  };
}

export { plus, minus, times, dividedBy };
