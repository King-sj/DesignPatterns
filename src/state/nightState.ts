// nightState.ts
import { State } from './state';
import { Context } from './context';
import { DayState } from './dayState';

export class NightState implements State {
  private static singleton: NightState = new NightState();
  private constructor() {}
  public static getInstance(): State {
    return this.singleton;
  }
  public doClock(context: Context, hour: number): void {
    if (9 <= hour && hour < 17) {
      context.changeState(DayState.getInstance());
    }
  }
  public doUse(context: Context): void {
    context.callSecurityCenter('紧急：夜间使用金库！');
  }
  public doAlarm(context: Context): void {
    context.callSecurityCenter('紧急铃(夜间)');
  }
  public doPhone(context: Context): void {
    context.recordLog('夜间通话录音');
  }
  public toString(): string {
    return '[夜间]';
  }
}