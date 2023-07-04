import { DoubleNode } from "./DoubleNode";

export class DoubleLinkedList<T> {
  private head: DoubleNode<T> | null;
  private lastNode: DoubleNode<T> | null;
  private size: number;

  constructor() {
    this.head = null;
    this.lastNode = null;
    this.size = 0;
  }

  getHead() {
    return this.head;
  }

  setHead(value: T) {
    this.head = new DoubleNode(value);
  }

  getLastNode() {
    return this.head;
  }

  setLastNode(value: T) {
    this.head = new DoubleNode(value);
  }

  add(value: T) {
    const node = new DoubleNode(value);

    if (this.head === null) {
      this.head = node;
      this.lastNode = node;
    } else if (this.lastNode !== null) {
      this.lastNode.setNext(node);
      node.setPrev(this.lastNode);
      this.lastNode = node;
    }

    this.size++;
    return node.getContent();
  }

  remove(callback: (value: T) => boolean) {
    if (this.head && callback(this.head.getContent())) {
      const removedNode = this.head;
      this.head = this.head.getNext();
      this.size--;
      return removedNode.getContent();
    } else {
      let node = this.head;
      while (node) {
        if (callback(node.getContent())) {
          node.getPrev().setNext(node.getNext());
          node.setNext(null);
          this.size--;
          return node.getContent();
        }
        node = node.getNext();
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
      node = node.getNext();
    }
    return null;
  }

  invert() {
    let node = this.head;

    while (node) {
      const nextNode = node.getNext();
      node.setNext(node.getPrev());
      node.setPrev(nextNode);

      node = nextNode;
		}
		
    [this.head, this.lastNode] = [this.lastNode, this.head];
  }

  getContent() {
    let node = this.head;
    const listAsArray = [];
    while (node) {
      listAsArray.push(node.getContent());
      node = node.getNext();
    }

    return listAsArray;
  }
}
