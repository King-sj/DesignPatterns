// messageBox.ts
import { Product } from "./product";
export class MessageBox implements Product {
  private decochar: string;
  constructor(decochar: string) {
    this.decochar = decochar;
  }
  use(s: string): void {
    const length = s.length;
    console.log(this.decochar.repeat(length + 4));
    console.log(`${this.decochar} ${s} ${this.decochar}`);
    console.log(this.decochar.repeat(length + 4));
  }
  createClone(): Product {
    let p: Product = null;
    try {
      p = <Product>Object.create(this);
    } catch (e) {
      console.error(e);
    }
    return p;
  }
}