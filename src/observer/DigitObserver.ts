// DigitObserver.ts
import { NumberGenerator } from './numberGenerator';
import { Observer } from './observer';
export class DigitObserver implements Observer {
  update(number: NumberGenerator): void {
    console.log(`DigitObserver: ${number.getNumber()}`);
  }
}