// main.ts
import { Player } from "./player";
import { WinningStrategy } from "./winningStrategy";
import { ProbStrategy } from "./probStrategy";

const player1 = new Player("Taro", new WinningStrategy());
const player2 = new Player("Hana", new ProbStrategy());
for (let i = 0; i < 10000; i++) {
  const nextHand1 = player1.nextHand();
  const nextHand2 = player2.nextHand();
  if (nextHand1.isStrongerThan(nextHand2)) {
    console.log(`Winner: ${player1.toString()}`);
    player1.win();
    player2.lose();
  } else if (nextHand2.isStrongerThan(nextHand1)) {
    console.log(`Winner: ${player2.toString()}`);
    player1.lose();
    player2.win();
  } else {
    console.log("Even...");
    player1.even();
    player2.even();
  }
}
console.log("Total result:");
console.log(player1.toString());
console.log(player2.toString());
// Output