// idCardFactory.ts
import { IDCard } from "./idCard";
import { Factory } from "./factory";
export class IDCardFactory extends Factory {
  private owners: string[] = [];
  createProduct(owner: string): IDCard {
    return new IDCard(owner);
  }
  registerProduct(product: IDCard): void {
    this.owners.push(product.getOwner());
  }
  getOwners(): string[] {
    return this.owners;
  }
}