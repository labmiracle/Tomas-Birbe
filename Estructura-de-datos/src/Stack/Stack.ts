export class Stack<T> {
  private collection: T[];

  constructor() {
    this.collection = [];
  }

  push(element: T) {
    this.collection.unshift(element);
    return this.collection.length;
  }

  pop() {
    return this.collection.pop();
  }

  size() {
    return this.collection.length;
  }

  content(): T[] {
    return this.collection.slice();
  }
}

export function toBinary(number: number) {
  const stack = new Stack();

  while (number !== 0) {
    stack.push(number % 2);
    number = Math.floor(number / 2);
  }

  let binaryNumber = "";
  let emptyStack = stack.size();
  while (emptyStack > 0) {
    binaryNumber += stack.pop();
    emptyStack = stack.size();
  }

  return binaryNumber;
}

export function toBase(base: number, number: number) {
  const stack = new Stack();
  if (base < 2 || base > 32) {
    throw new Error("La base debe estar comprendida entre el 2 y el 32");
  }
  while (number !== 0) {
    stack.push(number % base);
    number = Math.floor(number / base);
  }

  let convertedNumber = "";
  let emptyStack = stack.size();
  while (emptyStack > 0) {
    convertedNumber += stack.pop();
    emptyStack = stack.size();
  }

  return convertedNumber;
}
