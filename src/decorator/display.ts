// display.ts
export abstract class Display {
  //Note: this use Template Method Pattern
  abstract getColumns(): number;
  abstract getRows(): number;
  abstract getRowText(row: number): string;
  show(): void {
    for (let i = 0; i < this.getRows(); i++) {
      console.log(this.getRowText(i));
    }
  }
}