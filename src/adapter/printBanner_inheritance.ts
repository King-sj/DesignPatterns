// printBanner_inheritance.ts
import { Banner } from './banner';
import { Print } from './print_delegation';
export class PrintBanner extends Banner implements Print {
  private banner: Banner;
  constructor(string: string) {
    super(string);
    this.banner = new Banner(string);
  }
  printWeak(): void {
    this.banner.showWithParen();
  }
  printStrong(): void {
    this.banner.showWithAster();
  }
}