import { DoubleLinkedList } from "./DoubleLinkedList";

type Person = {
  name: string;
  lastName: string;
};

describe("Listas Enlazadas", () => {
  describe("Ejercicio 1: Implementar una lista enlazada", () => {
    test("Metodo add", () => {
      const list = new DoubleLinkedList<Person>();

      expect(list.add({ name: "Elvis", lastName: "Presley" })).toEqual({ name: "Elvis", lastName: "Presley" });
      expect(list.getSize()).toBe(1);
    });

    test("Metodo remove con el primer elemento", () => {
      const list = new DoubleLinkedList<Person>();

      list.add({ name: "Elvis", lastName: "Presley" });
      expect(list.remove((person) => person.lastName === "Presley")).toEqual({ name: "Elvis", lastName: "Presley" });
      expect(list.getSize()).toBe(0);
    });

    test("Metodo remove con otro elemento que no sea el primero", () => {
      const list = new DoubleLinkedList<Person>();

      list.add({ name: "Elvis", lastName: "Presley" });
      list.add({ name: "Michael", lastName: "Jackson" });
      expect(list.remove((person) => person.lastName === "Jackson")).toEqual({ name: "Michael", lastName: "Jackson" });
      expect(list.getSize()).toBe(1);
    });

    test("Metodo remove con un elemento que no existe", () => {
      const list = new DoubleLinkedList<Person>();

      list.add({ name: "Elvis", lastName: "Presley" });
      list.add({ name: "Michael", lastName: "Jackson" });
      expect(list.remove((person) => person.lastName === "Jagger")).toBeNull();
      expect(list.getSize()).toBe(2);
    });

    test("Metodo size", () => {
      const list = new DoubleLinkedList<Person>();

      list.add({ name: "Elvis", lastName: "Presley" });
      list.add({ name: "Michael", lastName: "Jackson" });
      expect(list.getSize()).toBe(2);
    });

    test("Metodo find con un elemento que existe", () => {
      const list = new DoubleLinkedList<Person>();

      list.add({ name: "Elvis", lastName: "Presley" });
      list.add({ name: "Michael", lastName: "Jackson" });
      list.add({ name: "Bob", lastName: "Dylan" });

      expect(list.find((person) => person.lastName === "Jackson")).toEqual({ name: "Michael", lastName: "Jackson" });
    });

    test("Metodo find con un elemento que no existe", () => {
      const list = new DoubleLinkedList<Person>();

      list.add({ name: "Elvis", lastName: "Presley" });
      list.add({ name: "Michael", lastName: "Jackson" });
      list.add({ name: "Bob", lastName: "Dylan" });

      expect(list.find((person) => person.lastName === "Jagger")).toBeNull();
    });
  });
  describe("Ejercicio 2: Agregar metodo invert", () => {
    test("Metodo invert", () => {
      const list = new DoubleLinkedList<Person>();

      const persons = [
        { name: "Elvis", lastName: "Presley" },
        { name: "Michael", lastName: "Jackson" },
        { name: "Bob", lastName: "Dylan" },
      ];

      for (const person of persons) {
        list.add(person);
      }
      expect(list.getContent()).toEqual(persons);
      list.invert();
      expect(list.getContent()).toEqual(persons.reverse());
    });
  });
  describe("Ejercicio 4: Agregar metodo deleteDups", () => {
    test("Metodo deleteDups", () => {
      const list = new DoubleLinkedList<number>();

      const numbers = [1, 2, 3, 4, 3, 3, 5, 6];

      for (const number of numbers) {
        list.add(number);
      }
      expect(list.getContent()).toEqual(numbers);
      list.deleteDups();
      expect(list.getContent()).toEqual([1, 2, 3, 4, 5, 6]);
    });
  });
});
