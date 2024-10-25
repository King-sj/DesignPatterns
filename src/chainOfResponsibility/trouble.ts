// trouble.ts
export class Trouble {
  private number: number;
  constructor(number: number) {
    this.number = number;
  }
  getNumber(): number {
    return this.number;
  }
  toString(): string {
    return `[Trouble ${this.number}]`;
  }
}