import { DoubleNode } from "./DoubleNode";
import { List } from "./List";

export class DoubleLinkedList<T> extends List<DoubleNode<T>> {
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
          if (node !== this.lastNode) {
            node.getNext().setPrev(node.getPrev());
          }
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

  deleteDups() {
    let node = this.head;
    while (node) {
      let nodeAux = node.getNext();
      while (nodeAux) {
        if (node.getContent() === nodeAux.getContent()) {
          nodeAux.getPrev().setNext(nodeAux.getNext());
          nodeAux.getNext().setPrev(nodeAux.getPrev());
          nodeAux = nodeAux.getNext();
          this.size--;
        } else {
          nodeAux = nodeAux.getNext();
        }
      }
      node = node.getNext();
    }
  }
}
