// product.ts
export interface Product {
  use(s:String): void;
  createClone(): Product;
}