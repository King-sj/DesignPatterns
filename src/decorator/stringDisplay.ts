// stringDisplay.ts
import { Display } from './display';
export class StringDisplay extends Display {
  private string: string;
  constructor(string: string) {
    super();
    this.string = string;
  }
  getColumns(): number {
    return this.string.length;
  }
  getRows(): number {
    return 1;
  }
  getRowText(row: number): string {
    if (row === 0) {
      return this.string;
    } else {
      return '';
    }
  }
}