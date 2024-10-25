// specialSupport.ts
import { Support } from './support';
import { Trouble } from './trouble';
export class SpecialSupport extends Support {
  private number: number;
  constructor(name: string, number: number) {
    super(name);
    this.number = number;
  }
  protected resolve(trouble: Trouble): boolean {
    if (trouble.getNumber() === this.number) {
      return true;
    }
    return false;
  }
}