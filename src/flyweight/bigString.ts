// bigString.ts
import { Factory } from '../abstractFactory/factory';
import { BigChar } from './bigChar';
import { BigCharFactory } from './bigCharFactory';
export class BigString {
  bigchars: BigChar[] = [];
  constructor(public str: string) {
    let factory = BigCharFactory.getInstance();
    str.split('').forEach((char) => {
      this.bigchars.push(factory.getBigChar(char));
    });
  }
  print() {
    this.bigchars.forEach((bigchar) => {
      bigchar.print();
    });
  }
}