import { Queue, hotPotato } from "./Queue";

describe("Cola", () => {
  describe("Ejercicio 1: Crear una cola y crear metodos enqueue, dequeue y size", () => {
    test("Metodo push", () => {
      const queue = new Queue();
      expect(queue.enqueue("Hola!")).toBe(1);
    });
    test("Metodo pop", () => {
      const queue = new Queue();
      queue.enqueue("Hola");
      expect(queue.dequeue()).toBe("Hola");
    });
    test("Metodo size", () => {
      const queue = new Queue();
      queue.enqueue("Hola");
      expect(queue.size()).toBe(1);
    });
  });

  test("Ejercicio 2: Utilizar la clase Stack para convertir decimales a numeros binarios", () => {
    const players = ["Alberto", "Romina", "Matias"];
    const randomPlayer = players[Math.floor(Math.random() * 2)];
    expect(hotPotato(["Alberto", "Romina", "Matias"], (player) => player === randomPlayer)).toBe(randomPlayer);
  });
});
