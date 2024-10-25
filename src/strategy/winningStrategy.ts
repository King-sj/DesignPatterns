// winningStrategy.ts
import { Hand } from './hand';
import { Strategy } from './strategy';
export class WinningStrategy implements Strategy {
  private won = false;
  private prevHand: Hand;
  constructor() {}
  nextHand(): Hand {
    if (!this.won) {
      this.prevHand = Hand.getHand(Math.floor(Math.random() * 3));
    }
    return this.prevHand;
  }
  study(win: boolean): void {
    this.won = win;
  }
}