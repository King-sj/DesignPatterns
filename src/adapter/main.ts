// main.ts
import { PrintBanner as pbi } from './printBanner_inheritance';
import { PrintBanner as pbd } from './printBanner_delegation';
// 使用继承
const printBanner = new pbi('Hello');
printBanner.printWeak();
printBanner.printStrong();
// 使用委托
const printBanner2 = new pbd('Hello');
printBanner2.printWeak();
printBanner2.printStrong();
