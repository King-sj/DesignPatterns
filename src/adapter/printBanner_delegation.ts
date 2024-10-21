// printBanner_delegation.ts
import { Print } from "./print_delegation";
import { Banner } from "./banner";
export class PrintBanner extends Print {
  private banner: Banner;
  constructor(string: string) {
    super();
    this.banner = new Banner(string);
  }
  printWeak(): void {
    this.banner.showWithParen();
  }
  printStrong(): void {
    this.banner.showWithAster();
  }
}