// htmlWriter.ts
export class HtmlWriter {
  constructor(private writer: string = '') {
  }
  title(title: string): void {
    this.writer += `<html><head><title>${title}</title></head><body>\n<h1>${title}</h1>\n`;
  }
  paragraph(message: string): void {
    this.writer += `<p>${message}</p>\n`;
  }
  link(href: string, caption: string): void {
    this.writer += `<a href="${href}">${caption}</a>\n`;
  }
  mailto(mailaddr: string, username: string): void {
    this.link(`mailto:${mailaddr}`, username);
  }
  close(): void {
    this.writer += '</body></html>\n';
  }
  getHtml(): string {
    return this.writer;
  }
}