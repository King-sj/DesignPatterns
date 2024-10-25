// strategy.ts
import { Hand } from './hand';
export interface Strategy {
  nextHand(): Hand;
  study(win: boolean): void;
}