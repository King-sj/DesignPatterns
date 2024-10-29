// main.ts
import { Printable } from './printable';
import { PrinterProxy } from './printerProxy';
let p: Printable = new PrinterProxy('Alice');
console.log('名字现在是' + p.getPrinterName() + '。');
p.setPrinterName('Bob');
console.log('名字现在是' + p.getPrinterName() + '。');
p.print('你好，世界。');
