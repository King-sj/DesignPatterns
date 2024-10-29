// main.ts
import { SafeFrame } from './safeFrame';
const safeFrame: SafeFrame = new SafeFrame();
for (let hour: number = 0; hour < 24; hour++) {
  safeFrame.setClock(hour);
  safeFrame.doUse();
  safeFrame.doAlarm();
  safeFrame.doPhone();
}