import { LinkedList } from "./LinkedList";

type Person = {
  name: string;
  lastName: string;
};

describe("Listas Enlazadas", () => {
  describe("Ejercicio 1: Implementar una lista enlazada", () => {
    test("Metodo add", () => {
      const list = new LinkedList<Person>();

      expect(list.add({ name: "Elvis", lastName: "Presley" })).toEqual({ name: "Elvis", lastName: "Presley" });
      expect(list.getSize()).toBe(1);
    });

    test("Metodo remove con el primer elemento", () => {
      const list = new LinkedList<Person>();

      list.add({ name: "Elvis", lastName: "Presley" });
      expect(list.remove((person) => person.lastName === "Presley")).toEqual({ name: "Elvis", lastName: "Presley" });
      expect(list.getSize()).toBe(0);
    });

    test("Metodo remove con otro elemento que no sea el primero", () => {
      const list = new LinkedList<Person>();

      list.add({ name: "Elvis", lastName: "Presley" });
      list.add({ name: "Michael", lastName: "Jackson" });
      expect(list.remove((person) => person.lastName === "Jackson")).toEqual({ name: "Michael", lastName: "Jackson" });
      expect(list.getSize()).toBe(1);
    });

    test("Metodo remove con un elemento que no existe", () => {
      const list = new LinkedList<Person>();

      list.add({ name: "Elvis", lastName: "Presley" });
      list.add({ name: "Michael", lastName: "Jackson" });
      expect(list.remove((person) => person.lastName === "Jagger")).toBeNull();
      expect(list.getSize()).toBe(2);
    });

    test("Metodo size", () => {
      const list = new LinkedList<Person>();

      list.add({ name: "Elvis", lastName: "Presley" });
      list.add({ name: "Michael", lastName: "Jackson" });
      expect(list.getSize()).toBe(2);
    });

    test("Metodo find con un elemento que existe", () => {
      const list = new LinkedList<Person>();

      list.add({ name: "Elvis", lastName: "Presley" });
      list.add({ name: "Michael", lastName: "Jackson" });
      list.add({ name: "Bob", lastName: "Dylan" });

      expect(list.find((person) => person.lastName === "Jackson")).toEqual({ name: "Michael", lastName: "Jackson" });
    });

    test("Metodo find con un elemento que no existe", () => {
      const list = new LinkedList<Person>();

      list.add({ name: "Elvis", lastName: "Presley" });
      list.add({ name: "Michael", lastName: "Jackson" });
      list.add({ name: "Bob", lastName: "Dylan" });

      expect(list.find((person) => person.lastName === "Jagger")).toBeNull();
    });
  });
});
