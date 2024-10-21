// charDispaly.ts
import { AbstractDisplay } from './abstractDisplay';
export class CharDisplay extends AbstractDisplay {
  ch : CharacterData;
  constructor(ch) {
    super();
    this.ch = ch;
  }
  open() {
    console.log('<<');
  }
  print() {
    console.log(this.ch);
  }
  close() {
    console.log('>>');
  }
}