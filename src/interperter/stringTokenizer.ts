// StringTokenizer.ts
export class StringTokenizer{
  private text: string;
  private tokens: string[];
  private index: number;
  constructor(text: string) {
    this.text = text;
    this.tokens = text.split(" ");
    this.index = 0;
  }
  nextToken(): string {
    return this.tokens[this.index++];
  }
  hasMoreTokens(): boolean {
    return this.index < this.tokens.length;
  }
}