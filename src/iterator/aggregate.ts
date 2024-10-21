// aggregate.ts
import { Iterator } from './iterator';
export interface Aggregate {
  iterator(): Iterator;
}