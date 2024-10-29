// node.ts
import {Context} from "./context";
export abstract class Node {
  abstract parse(ctx:Context): void;
}