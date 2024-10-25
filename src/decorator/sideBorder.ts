// sideBorder.ts
import { Border } from "./border";
import { Display } from "./display";
export class SideBorder extends Border {
  private borderChar: string;
  constructor(display: Display, ch: string) {
    super(display);
    this.borderChar = ch;
  }
  getColumns(): number {
    return 1 + this.display.getColumns() + 1;
  }
  getRows(): number {
    return this.display.getRows();
  }
  getRowText(row: number): string {
    return this.borderChar + this.display.getRowText(row) + this.borderChar;
  }
}