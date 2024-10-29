// printable.ts
export interface Printable {
  setPrinterName(name: string): void;
  getPrinterName(): string;
  print(str:string): void;
}