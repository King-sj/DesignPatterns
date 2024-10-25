// player.ts
import { Hand } from './hand';
import { Strategy } from './strategy';
export class Player {
  private name: string;
  private strategy: Strategy;
  private wincount = 0;
  private losecount = 0;
  private gamecount = 0;
  constructor(name: string, strategy: Strategy) {
    this.name = name;
    this.strategy = strategy;
  }
  nextHand(): Hand {
    return this.strategy.nextHand();
  }
  win(): void {
    this.strategy.study(true);
    this.wincount++;
    this.gamecount++;
  }
  lose(): void {
    this.strategy.study(false);
    this.losecount++;
    this.gamecount++;
  }
  even(): void {
    this.gamecount++;
  }
  toString(): string {
    return `[${this.name}:${this.gamecount} games, ${this.wincount} win, ${this.losecount} lose]`;
  }
}