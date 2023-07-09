export class List<T> {
  protected head: T;
  protected lastNode: T;
  protected size: number;

  constructor() {
    this.head = null;
    this.lastNode = null;
    this.size = 0;
	}
	
	
}
