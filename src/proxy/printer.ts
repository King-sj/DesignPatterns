// printer.ts
import { Printable } from "./printable";
export class Printer implements Printable {
  private name: string;
  constructor(name: string) {
    this.name = name;
    this.heavyJob(`正在生成Printer的实例(${this.name})`);
  }
  setPrinterName(name: string): void {
    this.name = name;
  }
  getPrinterName(): string {
    return this.name;
  }
  print(str:string): void {
    console.log(`=== ${this.name} ===`);
    console.log(str);
  }
  private heavyJob(msg: string): void {
    console.log(msg);
    for (let i = 0; i < 5; i++) {
      try {
        console.log(".");
        setTimeout(() => {
          console.log(".");
        }, 1000);
      } catch (e) {
        console.log(e);
      }
    }
    console.log("完了。");
  }
}