// main.ts
import { Builder } from './builder';
import { Director } from './director';
import { HTMLBuilder } from './htmlBuilder';
import { TextBuilder } from './textBuilder';

// TextBuilder
console.log("Creating a text file...");
const textBuilder = new TextBuilder();
const director = new Director(textBuilder);
director.construct();
const result = textBuilder.getResult();
console.log(result);

// HTMLBuilder
console.log("Creating an HTML file...");
const htmlBuilder = new HTMLBuilder();
const director2 = new Director(htmlBuilder);
director2.construct();
const filename = htmlBuilder.getResult();
console.log(`${filename}が作成されました。`);