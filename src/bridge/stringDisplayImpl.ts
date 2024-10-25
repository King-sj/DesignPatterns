// strDisplayImpl.ts
import { DisplayImpl } from './displayImpl';
export class StringDisplayImpl extends DisplayImpl {
  private str: string;
  private width: number;
  constructor(str: string) {
    super();
    this.str = str;
    this.width = str.length;
  }
  rawOpen() {
    this.printLine();
  }
  rawPrint() {
    console.log(`|${this.str}|`);
  }
  rawClose() {
    this.printLine();
  }
  private printLine() {
    let buffer = '+';
    for (let i = 0; i < this.width; i++) {
      buffer += '-';
    }
    buffer += '+';
    console.log(buffer);
  }
}