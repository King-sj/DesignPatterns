// stringDisplay.ts
import { AbstractDisplay } from './abstractDisplay';
export class StringDisplay extends AbstractDisplay {
  private str: string;
  private width: number;
  constructor(str: string) {
    super();
    this.str = str;
    this.width = str.length;
  }
  open() {
    this.printLine();
  }
  print() {
    console.log(`|${this.str}|`);
  }
  close() {
    this.printLine();
  }
  private printLine() {
    let line = '+';
    for (let i = 0; i < this.width; i++) {
      line += '-';
    }
    line += '+';
    console.log(line);
  }
}