// main.ts
import { NoSupport } from "./NoSupport";
import { LimitSupport } from "./LimitSupport";
import { OddSupport } from "./OddSupport";
import { SpecialSupport } from "./specialSupport";
import { Support } from "./support";
import { Trouble } from "./trouble";
let alice: Support = new NoSupport("Alice");
let bob: Support = new LimitSupport("Bob", 100);
let charlie: Support = new SpecialSupport("Charlie", 429);
let diana: Support = new LimitSupport("Diana", 200);
let elmo: Support = new OddSupport("Elmo");
let fred: Support = new LimitSupport("Fred", 300);

alice.setNext(bob).setNext(charlie).setNext(diana).setNext(elmo).setNext(fred);

for (let i = 0; i < 500; i += 33) {
  alice.support(new Trouble(i));
}