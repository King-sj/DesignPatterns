// entry.md
export abstract class Entry {
  abstract getName(): string;
  abstract getSize(): number;
  add(entry: Entry): Entry {
    throw new Error("FileTreatmentException");
  }
  printList(): void {
    this.printListWithPrefix("");
  }
  protected abstract printListWithPrefix(prefix: string): void;
  toString(): string {
    return `${this.getName()} (${this.getSize()})`;
  }
}