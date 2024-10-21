// underlinePen.ts
import { Product } from './product';
export class UnderlinePen implements Product {
  private ulchar: string;
  constructor(ulchar: string) {
    this.ulchar = ulchar;
  }
  use(s: string): void {
    const length = s.length;
    console.log(`"${s}"`);
    console.log(' ');
    console.log(` ${this.ulchar.repeat(length)}`);
    console.log(' ');
  }
  createClone(): Product {
    let p: Product = null;
    try {
      p = Object.create(this);
    } catch (e) {
      console.log(e);
    }
    return p;
  }
}