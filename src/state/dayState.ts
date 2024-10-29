// dayState.ts
import { State } from './state';
import { Context } from './context';
import { NightState } from './nightState';

export class DayState implements State {
  private static singleton: DayState = new DayState();
  private constructor() {}
  public static getInstance(): State {
    return this.singleton;
  }
  public doClock(context: Context, hour: number): void {
    if (hour < 9 || 17 <= hour) {
      context.changeState(NightState.getInstance());
    }
  }
  public doUse(context: Context): void {
    context.recordLog('金库使用(白天)');
  }
  public doAlarm(context: Context): void {
    context.callSecurityCenter('紧急铃(白天)');
  }
  public doPhone(context: Context): void {
    context.callSecurityCenter('正常通话(白天)');
  }
  public toString(): string {
    return '[白天]';
  }
}