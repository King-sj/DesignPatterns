// main.ts
import { CharDisplay } from "./charDispaly";
import { StringDisplay } from "./stringDisplay";

const d1 = new CharDisplay('H');
const d2 = new StringDisplay('Hello, world.');
const d3 = new StringDisplay('你好，世界。');
d1.display();
d2.display();
d3.display();
