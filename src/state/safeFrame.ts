// safeFrame.ts
import { Context } from './context';
import { State } from './state';
import { DayState } from './dayState';
export class SafeFrame implements Context{
  private state: State = DayState.getInstance();
  public setClock(hour: number): void {
    let clockString: string = '現在時刻は';
    if (hour < 10) {
      clockString += `0${hour}:00`;
    } else {
      clockString += `${hour}:00`;
    }
    console.log(clockString);
    this.state.doClock(this, hour);
  }
  public changeState(state: State): void {
    console.log(`${this.state.toString()}から${state.toString()}へ状態が変化しました。`);
    this.state = state;
  }
  public callSecurityCenter(msg: string): void {
    console.log(`call! ${msg}`);
  }
  public recordLog(msg: string): void {
    console.log(`record ... ${msg}`);
  }
  public doUse(): void {
    this.state.doUse(this);
  }
  public doAlarm(): void {
    this.state.doAlarm(this);
  }
  public doPhone(): void {
    this.state.doPhone(this);
  }
}