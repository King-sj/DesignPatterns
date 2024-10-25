// listTray.ts
import { Tray } from "./tray";
export class ListTray extends Tray {
  constructor(caption: string) {
    super(caption);
  }
  makeHTML() {
    let buffer = [];
    buffer.push("<li>\n");
    buffer.push(this.caption + "\n");
    buffer.push("<ul>\n");
    this.tray.forEach(item => {
      buffer.push(item.makeHTML());
    });
    buffer.push("</ul>\n");
    buffer.push("</li>\n");
    return buffer.join("");
  }
}