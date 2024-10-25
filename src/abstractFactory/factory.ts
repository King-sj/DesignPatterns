// factory.ts
// 抽象工厂
import { Link } from './link';
import { Tray } from './tray';
import { Page } from './page';

export abstract class Factory {
  abstract createLink(caption: string, url: string): Link;
  abstract createTray(caption: string): Tray;
  abstract createPage(title: string, author: string): Page;
}