// OddSupport.ts
import { Support } from './support';
export class OddSupport extends Support {
  resolve(trouble) {
    if (trouble.getNumber() % 2 === 1) {
      return true;
    }
    else {
      return false;
    }
  }
}