// bigCharFactory.ts
import { BigChar } from './bigChar';
export class BigCharFactory {
  private pool: Map<string, BigChar> = new Map();
  private static singleton: BigCharFactory = new BigCharFactory();
  private constructor() { }
  public static getInstance(): BigCharFactory {
    return BigCharFactory.singleton;
  }
  public getBigChar(charname: string): BigChar {
    let bc: BigChar = this.pool.get(charname);
    // ts 是单线程的，所以不需要考虑多线程问题， 若为多线程则需要加锁
    if (bc == null) {
      bc = new BigChar(charname);
      this.pool.set(charname, bc);
    }
    return bc;
  }
}