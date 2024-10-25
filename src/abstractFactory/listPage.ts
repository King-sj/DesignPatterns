// listPage.ts
import { Page } from './page';
export class ListPage extends Page {
  makeHTML() {
    let buffer = [];
    buffer.push(`<html><head><title>${this.title}</title></head>`);
    buffer.push(`<body>`);
    buffer.push(`<h1>${this.title}</h1>`);
    buffer.push(`<ul>`);
    this.content.forEach(item => {
      buffer.push(item.makeHTML());
    });
    buffer.push(`</ul>`);
    buffer.push(`<hr><address>${this.author}</address>`);
    buffer.push(`</body></html>`);
    return buffer.join('\n');
  }
}