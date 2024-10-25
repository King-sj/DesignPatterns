// directory.ts
import { Entry } from './entry';
export class Directory extends Entry {
  private directory: Entry[] = [];
  constructor(private name: string) {
    super();
  }
  getName(): string {
    return this.name;
  }
  getSize(): number {
    return this.directory.reduce((acc, entry) => acc + entry.getSize(), 0);
  }
  add(entry: Entry): Entry {
    this.directory.push(entry);
    return this;
  }
  protected printListWithPrefix(prefix: string): void {
    console.log(`${prefix}/${this}`);
    this.directory.forEach(entry => (entry as Directory).printListWithPrefix(`${prefix}/${this.name}`));
  }
}