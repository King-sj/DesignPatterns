// directory.ts
import { Entry } from './entry';
import { Visitor } from './visitor';
export class Directory extends Entry {
  private dir: Entry[] = [];
  constructor(private name: string) {
    super();
  }
  getName() {
    return this.name;
  }
  getSize() {
    let size = 0;
    this.dir.forEach((entry) => {
      size += entry.getSize();
    });
    return size;
  }
  add(entry: Entry) {
    this.dir.push(entry);
    return this;
  }
  iterator() {
    return this.dir;
  }
  accept(visitor:Visitor) {
    visitor.visit(this);
  }
}