// idCard.ts
import { Product } from './product';
export class IDCard implements Product {
  private owner: string;
  constructor(owner: string) {
    this.owner = owner;
  }
  use(): void {
    console.log(`${this.owner}使用了ID卡`);
  }
  getOwner(): string {
    return this.owner;
  }
}