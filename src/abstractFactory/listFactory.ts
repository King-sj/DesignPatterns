// listFactory.ts
import { Factory } from './factory';
import { ListLink } from './listLink';
import { ListTray } from './listTray';
import { ListPage } from './listPage';

export class ListFactory extends Factory {
  createLink(caption: string, url: string) {
    return new ListLink(caption, url);
  }
  createTray(caption: string) {
    return new ListTray(caption);
  }
  createPage(title: string, author: string) {
    return new ListPage(title, author);
  }
}