// file.ts
import { Entry } from './entry';
export class File extends Entry {
  constructor(private name: string, private size: number) {
    super();
  }
  getName(): string {
    return this.name;
  }
  getSize(): number {
    return this.size;
  }
  protected printListWithPrefix(prefix: string): void {
    console.log(`${prefix}/${this}`);
  }
}