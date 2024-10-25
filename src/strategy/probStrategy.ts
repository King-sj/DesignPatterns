// probStrategy.ts
import { Hand } from './hand';
import { Strategy } from './strategy';
export class ProbStrategy implements Strategy {
  private prevHandValue = 0;
  private currentHandValue = 0;
  private history: number[][] = [
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1],
  ];
  constructor() {}
  nextHand(): Hand {
    const bet = Math.floor(Math.random() * this.getSum(this.currentHandValue));
    let handvalue = 0;
    if (bet < this.history[this.currentHandValue][0]) {
      handvalue = 0;
    } else if (bet < this.history[this.currentHandValue][0] + this.history[this.currentHandValue][1]) {
      handvalue = 1;
    } else {
      handvalue = 2;
    }
    this.prevHandValue = this.currentHandValue;
    this.currentHandValue = handvalue;
    return Hand.getHand(handvalue);
  }
  private getSum(hv: number): number {
    let sum = 0;
    for (let i = 0; i < 3; i++) {
      sum += this.history[hv][i];
    }
    return sum;
  }
  study(win: boolean): void {
    if (win) {
      this.history[this.prevHandValue][this.currentHandValue]++;
    } else {
      this.history[this.prevHandValue][(this.currentHandValue + 1) % 3]++;
      this.history[this.prevHandValue][(this.currentHandValue + 2) % 3]++;
    }
  }
}