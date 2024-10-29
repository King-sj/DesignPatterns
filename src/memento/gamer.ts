// gamer.ts
import { Memento } from './memento';
export class Gamer {
  private money: number;
  private fruits: string[];
  private static fruitsName: string[] = ['apple', 'grape', 'banana', 'orange'];
  constructor(money: number) {
    this.money = money;
    this.fruits = [];
  }
  getMoney(): number {
    return this.money;
  }
  bet(): void {
    const dice = Math.floor(Math.random() * 6) + 1;
    if (dice === 1) {
      this.money += 100;
      console.log('Money increased');
    } else if (dice === 2) {
      this.money /= 2;
      console.log('Money halved');
    } else if (dice === 6) {
      const f = this.getFruit();
      console.log(`Got fruit: ${f}`);
      this.fruits.push(f);
    } else {
      console.log('Nothing happened');
    }
  }
  createMemento(): Memento {
    const m = new Memento(this.money);
    this.fruits.forEach(f => {
      if (f.startsWith('delicious')) {
        m.addFruit(f);
      }
    });
    return m;
  }
  restoreMemento(memento: Memento): void {
    this.money = memento.money;
    this.fruits = memento.fruits;
  }
  toString(): string {
    return `[money = ${this.money}, fruits = ${this.fruits.join(', ')}]`;
  }
  private getFruit(): string {
    const prefix = Math.random() > 0.5 ? 'delicious ' : '';
    return prefix + Gamer.fruitsName[Math.floor(Math.random() * Gamer.fruitsName.length)];
  }
}