// repeatCommandNode.ts
import { Node } from "./node";
import { Context } from "./context";
import { CommandListNode } from "./commandListNode";
// <repeat command> ::= "repeat" <number> "end"
export class RepeatCommandNode extends Node {
  number: number;
  commandListNode: CommandListNode;
  parse(context: Context): void {
    context.skipToken("repeat");
    this.number = context.getCurrentNumber();
    context.nextToken();
    this.commandListNode = new CommandListNode();
    this.commandListNode.parse(context);
  }
  toString(): string {
    return `[repeat [${this.number} ${this.commandListNode.toString()}]]`;
  }
}