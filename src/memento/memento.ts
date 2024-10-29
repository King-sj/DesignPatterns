// memento.ts
export class Memento {
  money: number;
  fruits: string[];
  constructor(money: number) {
    this.money = money;
    this.fruits = [];
  }
  public getMoney(): number {
    return this.money;
  }
  public addFruit(fruit: string): void {
    this.fruits.push(fruit);
  }
  public getFruits(): string[] {
    return [...this.fruits];
  }
}