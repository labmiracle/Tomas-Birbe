export class Node<T> {
  private content: T;
  private nextNode: Node<T> | null;

  constructor(data: T) {
    this.content = data;
    this.nextNode = null;
  }

  public getContent() {
    return this.content;
  }

  public getNext() {
    return this.nextNode;
  }

  public setNext(nextItem: Node<T>) {
    this.nextNode = nextItem;
  }
}
