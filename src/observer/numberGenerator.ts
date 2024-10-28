// numberGenerator.ts
import { Observer } from './observer';
export abstract class NumberGenerator {
  private observers: Observer[] = [];
  public addObserver(observer: Observer): void {
    this.observers.push(observer);
  }
  public deleteObserver(observer: Observer): void {
    this.observers = this.observers.filter((o) => o !== observer);
  }
  public notifyObservers(): void {
    this.observers.forEach((o) => o.update(this));
  }
  public abstract getNumber(): number;
  public abstract execute(): void;
}