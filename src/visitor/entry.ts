// entry.ts
import { Element } from "./element";
import { Visitor } from "./visitor";
export abstract class Entry implements Element {
  abstract getName(): string;
  abstract getSize(): number;
  add(entry: Entry): Entry {
    throw new Error("Entry.add not implemented");
  }
  iterator(): Entry[] {
    throw new Error("Entry.iterator not implemented");
  }
  toString(): string {
    return `${this.getName()} (${this.getSize()})`;
  }
  abstract accept(visitor: Visitor): void;
}