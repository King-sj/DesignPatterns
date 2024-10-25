// visitor.ts
import { Entry } from './entry';

export abstract class Visitor {
  abstract visit(file:Entry);
}