// context.ts
import { StringTokenizer } from './stringTokenizer';
export class Context {
  private stringTokenizer: StringTokenizer;
  private currentToken: string;
  constructor(text: string) {
    this.stringTokenizer = new StringTokenizer(text);
    this.nextToken();
  }
  nextToken(): string {
    if (this.stringTokenizer.hasMoreTokens()) {
      this.currentToken = this.stringTokenizer.nextToken();
    } else {
      this.currentToken = null;
    }
    return this.currentToken;
  }
  getCurrentToken(): string {
    return this.currentToken;
  }
  skipToken(token: string): void {
    if (token != this.currentToken) {
      throw new Error(`Warning: ${token} is expected, but ${this.currentToken} is found.`);
    }
    this.nextToken();
  }
  getCurrentNumber(): number {
    let number: number;
    try {
      number = Number(this.currentToken);
    } catch (e) {
      throw new Error(`Warning: ${e}`);
    }
    return number;
  }
}