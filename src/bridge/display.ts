// display.ts
import { DisplayImpl } from './displayImpl';
export class Display {
  private impl: DisplayImpl;
  constructor(impl: DisplayImpl) {
    this.impl = impl;
  }
  open() {
    this.impl.rawOpen();
  }
  print() {
    this.impl.rawPrint();
  }
  close() {
    this.impl.rawClose();
  }
  display() {
    this.open();
    this.print();
    this.close();
  }
}