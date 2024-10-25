// page.ts
// 抽象html页面
import { Item } from './item';
export abstract class Page {
  title: string;
  author: string;
  content: Array<Item>;
  buffer: string;
  constructor(title: string, author: string) {
    this.title = title;
    this.author = author;
    this.content = [];
  }
  add(item: Item): void {
    this.content.push(item);
  }
  output(): void {
    try {
      this.buffer = this.makeHTML();
      console.log(this.buffer);
    } catch (error) {
      console.log(error);
    }
  }
  abstract makeHTML(): string;
}