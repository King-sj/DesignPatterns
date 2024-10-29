// printerProxy.ts
import { Printable } from './printable';
import { Printer } from './printer';
export class PrinterProxy implements Printable {
  private name: string;
  private real: Printer;
  constructor(name: string) {
    this.name = name;
  }
  setPrinterName(name: string): void {
    if (this.real !== undefined) {
      this.real.setPrinterName(name);
    }
    this.name = name;
  }
  getPrinterName(): string {
    return this.name;
  }
  print(str: string): void {
    this.realize();
    this.real.print(str);
  }
  private realize(): void {
    if (this.real === undefined) {
      this.real = new Printer(this.name);
    }
  }
}