// commandNode.ts
import { Context } from "./context";
import { Node } from "./node";
import { RepeatCommandNode } from "./repeatCommandNode";
import { PrimitiveCommandNode } from "./primitiveCommandNode";
// <command> ::= <repeat command> | <primitive command>
export class CommandNode extends Node {
  node: Node;
  parse(context: Context): void {
    if (context.getCurrentToken() === "repeat") {
      this.node = new RepeatCommandNode();
      this.node.parse(context);
    } else {
      this.node = new PrimitiveCommandNode();
      this.node.parse(context);
    }
  }
  toString(): string {
    return this.node.toString();
  }
}