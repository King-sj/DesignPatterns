// htmlBuilder.ts
import { Builder } from './builder';
export class HTMLBuilder extends Builder {
  private filename: string = '';
  private buffer: string = '';

  public makeTitle(title: string): void {
    this.filename = `${title}.html`;
    this.buffer += `<html><head><title>${title}</title></head><body>`;
    this.buffer += `<h1>${title}</h1>`;
  }

  public makeString(str: string): void {
    this.buffer += `<p>${str}</p>`;
  }

  public makeItems(items: string[]): void {
    this.buffer += '<ul>';
    items.forEach((item) => {
      this.buffer += `<li>${item}</li>`;
    });
    this.buffer += '</ul>';
  }

  public close(): void {
    this.buffer += '</body></html>';
  }

  public getResult(): string {
    return this.buffer;
  }
}