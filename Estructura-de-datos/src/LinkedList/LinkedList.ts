import { List } from "./List";
import { Node } from "./Node";

export class LinkedList<T> extends List<Node<T>> {
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
      this.head = this.head.getNext();
      this.size--;
      return removedNode.getContent();
    } else {
      let node = this.head;
      let prevNode = null;
      while (node) {
        if (callback(node.getContent())) {
          prevNode.setNext(node.getNext());
          node.setNext(null);
          this.size--;
          return node.getContent();
        }
        prevNode = node;
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
    let prevNode = null;
    let nextNode = null;

    while (node) {
      nextNode = node.getNext();
      node.setNext(prevNode);
      prevNode = node;
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

  deleteDups() {
    let node = this.head;
    while (node) {
      let nodeAux = node.getNext();
      let prevNode = node;
      while (nodeAux) {
        if (node.getContent() === nodeAux.getContent()) {
          prevNode.setNext(nodeAux.getNext());
          nodeAux = nodeAux.getNext();
          this.size--;
        } else {
          prevNode = nodeAux;
          nodeAux = nodeAux.getNext();
        }
      }
      node = node.getNext();
    }
  }
}
