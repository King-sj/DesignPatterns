// file.ts
import { Visitor } from './visitor';
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
  accept(visitor: Visitor): void {
    visitor.visit(this);
  }
}