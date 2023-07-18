export class Queue<T> {
  private queue: T[];

  constructor() {
    this.queue = [];
  }

  enqueue(element: T) {
    return this.queue.unshift(element);
  }

  dequeue() {
    return this.queue.pop();
  }

  size() {
    return this.queue.length;
  }
}

export function hotPotato<T>(players: T[], criteria: (player: T) => boolean) {
  const queue = new Queue<T>();

  players.forEach((player) => {
    queue.enqueue(player);
  });

  let stopGame = false;
  while (!stopGame) {
    const player = queue.dequeue();
    if (criteria(player)) {
      stopGame = true;
      return player;
    }
    queue.enqueue(player);
  }
}
