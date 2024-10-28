// graphObserver.ts
import { Observer } from './observer';
import { NumberGenerator } from './numberGenerator';
export class GraphObserver implements Observer {
  update(generator: NumberGenerator): void {
    const count = generator.getNumber();
    let graph = '';
    for (let i = 0; i < count; i++) {
      graph += '*';
    }
    console.log(`GraphObserver: \n${graph}\n ${generator.getNumber()}\n${graph} `);
  }
}