// fullBorder.ts
import { Border } from "./border";
export class FullBorder extends Border {
  constructor(display) {
    super(display);
  }
  getColumns() {
    return 1 + this.display.getColumns() + 1;
  }
  getRows() {
    return 1 + this.display.getRows() + 1;
  }
  getRowText(row) {
    if (row === 0) {
      return "+" + this.makeLine("-", this.display.getColumns()) + "+";
    } else if (row === this.display.getRows() + 1) {
      return "+" + this.makeLine("-", this.display.getColumns()) + "+";
    } else {
      return "|" + this.display.getRowText(row - 1) + "|";
    }
  }
  private makeLine(ch, count) {
    let buf = "";
    for (let i = 0; i < count; i++) {
      buf += ch;
    }
    return buf;
  }
}