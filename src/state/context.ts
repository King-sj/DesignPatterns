// context.ts
import { State } from './state';
export interface Context {
  setClock(hour: number): void;
  changeState(state: State): void;
  callSecurityCenter(msg: string): void;
  recordLog(msg: string): void;
}