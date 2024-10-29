// primitiveCommandNode.ts
import { Node } from "./node";
import { Context } from "./context";
// <primitive command> ::= <go> | <right> | <left>
export class PrimitiveCommandNode extends Node {
  private name: string;
  parse(context: Context): void {
    this.name = context.getCurrentToken();
    context.skipToken(this.name);
    if (this.name !== "go" && this.name !== "right" && this.name !== "left") {
      throw new Error(`${this.name} is undefined`);
    }
  }
  toString(): string {
    return this.name+" ";
  }
}