// main.ts
import { Gamer } from './gamer';
let gamer = new Gamer(100);
let memento = gamer.createMemento();
for (let i = 0; i < 100; i++) {
  console.log(`==== ${i}`);
  console.log(`Current: ${gamer.toString()}`);
  gamer.bet();
  console.log(`Money now: ${gamer.getMoney()}`);
  if (gamer.getMoney() > memento.getMoney()) {
    console.log('Money increased, saving current state');
    memento = gamer.createMemento();
  } else if (gamer.getMoney() < memento.getMoney() / 2) {
    console.log('Money halved, restoring to previous state');
    gamer.restoreMemento(memento);
  }
  console.log('');
}