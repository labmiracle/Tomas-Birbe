export class DoubleNode<T> {
  protected content: T;
  protected nextNode: DoubleNode<T> | null;
  private prevNode: DoubleNode<T> | null;

  constructor(data: T) {
    this.content = data;
    this.nextNode = null;
    this.prevNode = null;
  }

  public getContent() {
    return this.content;
  }

  public getNext() {
    return this.nextNode;
  }

  public setNext(nextItem: DoubleNode<T>) {
    this.nextNode = nextItem;
  }

  public setPrev(prevItem: DoubleNode<T>) {
    this.prevNode = prevItem;
  }

  public getPrev() {
    return this.prevNode;
  }
}
