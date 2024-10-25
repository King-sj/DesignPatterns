// countDisplay.ts
import { Display } from './display';
import { DisplayImpl } from './displayImpl';
export class CountDisplay extends Display {
  constructor(impl : DisplayImpl) {
    super(impl);
  }
  multiDisplay(times) {
    this.open();
    for (let i = 0; i < times; i++) {
      this.print();
    }
    this.close();
  }
}