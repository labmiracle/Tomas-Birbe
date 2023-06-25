import { Node } from "./Node";

export class LinkedList<T> {
  private head: Node<T> | null;
  private lastNode: Node<T> | null;
  private size: number;

  constructor() {
    this.head = null;
    this.lastNode = null;
    this.size = 0;
  }

  add(value: T) {
    const node = new Node(value);

    if (this.head === null) {
      this.head = node;
      this.lastNode = node;
    } else if (this.lastNode !== null) {
      this.lastNode.setNext(node);
      this.lastNode = node;
    }

    this.size++;
    return node.getContent();
  }

  remove(callback: (value: T) => boolean) {
    if (this.head && callback(this.head.getContent())) {
      const removedNode = this.head;
      this.head = this.head.next();
      this.size--;
      return removedNode.getContent();
    } else {
      let node = this.head;
      let prevNode = null;
      while (node) {
        if (callback(node.getContent())) {
          prevNode.setNext(node.next());
          node.setNext(null);
          this.size--;
          return node.getContent();
        }
        prevNode = node;
        node = node.next();
      }
      return null;
    }
  }

  getSize() {
    return this.size;
  }

  find(callback: (value: T) => boolean) {
    let node = this.head;

    while (node) {
      if (callback(node.getContent())) {
        return node.getContent();
      }
      node = node.next();
    }
    return null;
  }
}
