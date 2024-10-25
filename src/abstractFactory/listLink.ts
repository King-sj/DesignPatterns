// listLink.ts
import { Link } from './link';
export class ListLink extends Link {
  constructor(caption: string, url: string) {
    super(caption, url);
  }
  makeHTML() {
    return `<li><a href="${this.url}">${this.caption}</a></li>\n`;
  }
}