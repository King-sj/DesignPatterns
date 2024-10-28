// pageMaker.ts
import { DataBase } from './dataBase';
import { HtmlWriter } from './htmlWriter';
export class PageMaker {
  private constructor() {}
  static makeWelcomePage(mailAddress: string, fileName: string): void {
    console.log(`Making ${fileName} for ${mailAddress}`);
    let mailprop = DataBase.getProperties('maildata');
    let username = mailprop[mailAddress];
    let writer = new HtmlWriter(fileName);
    writer.title('Welcome to ' + username + "'s page!");
    writer.paragraph(username + 'のページへようこそ。');
    writer.paragraph('メール待っていますね。');
    writer.mailto(mailAddress, username);
    writer.close();
    console.log( writer.getHtml())
  }
}