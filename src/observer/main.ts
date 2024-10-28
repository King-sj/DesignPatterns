// main.ts
import { NumberGenerator } from './numberGenerator';
import { Observer } from './observer';
import { RandomNumberGenerator } from './randomNumberGenerator';
import { DigitObserver } from './DigitObserver';
import { GraphObserver } from './graphObserver';
const generator: NumberGenerator = new RandomNumberGenerator();
const observer1 = new DigitObserver();
const observer2 = new GraphObserver();
generator.addObserver(observer1);
generator.addObserver(observer2);
generator.execute();
