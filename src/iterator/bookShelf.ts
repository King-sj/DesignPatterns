// bookShelf.ts
import { Book } from './book';
import { Iterator } from './iterator';
import { BookShelfIterator } from './bookShelfIterator';
import { Aggregate } from './aggregate';
export class BookShelf implements Aggregate {
  private books: Book[];
  private last: number = 0;
  constructor() {
    this.books = [];
  }
  getBookAt(index: number): Book {
    return this.books[index];
  }
  appendBook(book: Book): void {
    this.books[this.last] = book;
    this.last++;
  }
  getLength(): number {
    return this.last;
  }
  iterator(): Iterator {
    return new BookShelfIterator(this);
  }
}