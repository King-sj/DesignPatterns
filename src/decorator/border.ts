// border.ts
import { Display } from "./display";
export abstract class Border extends Display {
  protected display: Display;
  constructor(display: Display) {
    super();
    this.display = display;
  }
}