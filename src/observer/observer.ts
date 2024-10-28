// observer.ts
import {NumberGenerator} from './numberGenerator';
export interface Observer {
  update(generator: NumberGenerator): void;
}