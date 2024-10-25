// item.ts
// 抽象零件
export abstract class Item{
  protected caption: string;
  constructor(caption: string){
    this.caption = caption;
  }
  abstract makeHTML(): string;
}