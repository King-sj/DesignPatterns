// abstractDisplay.ts
export abstract class AbstractDisplay {
  protected abstract open(): void;
  protected abstract print(): void;
  protected abstract close(): void;

  display(): void {
    this.open();
    for (let i = 0; i < 5; i++) {
      this.print();
    }
    this.close();
  }
}