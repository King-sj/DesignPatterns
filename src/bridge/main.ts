// main.ts
import { Display } from './display';
import { CountDisplay } from './countDisplay';
import { StringDisplayImpl } from './stringDisplayImpl';
const d1 = new Display(new StringDisplayImpl('Hello, China.'));
const d2 = new CountDisplay(new StringDisplayImpl('Hello, World.'));
const d3 = new CountDisplay(new StringDisplayImpl('Hello, Universe.'));
d1.display();
d2.display();
d3.multiDisplay(5);