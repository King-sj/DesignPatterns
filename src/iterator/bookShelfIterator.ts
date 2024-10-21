// bookShelfIterator.ts
import { BookShelf } from './bookShelf';
import { Iterator } from './iterator';
export class BookShelfIterator implements Iterator {
  private bookShelf: BookShelf;
  private index: number;
  constructor(bookShelf: BookShelf) {
    this.bookShelf = bookShelf;
    this.index = 0;
  }
  hasNext(): boolean {
    return this.index < this.bookShelf.getLength();
  }
  next(): any {
    const book = this.bookShelf.getBookAt(this.index);
    this.index++;
    return book;
  }
}