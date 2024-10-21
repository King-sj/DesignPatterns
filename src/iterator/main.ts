// test/main.ts
import { BookShelf } from "./bookShelf";
import { Book } from "./book";
const bookShelf = new BookShelf();
bookShelf.appendBook(new Book("Around the World in 80 Days"));
bookShelf.appendBook(new Book("Bible"));
bookShelf.appendBook(new Book("Cinderella"));
bookShelf.appendBook(new Book("Daddy-Long-Legs"));
const it = bookShelf.iterator();
while (it.hasNext()) {
  const book = it.next();
  console.log(book.getName());
}