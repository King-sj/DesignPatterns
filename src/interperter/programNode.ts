// programNode.ts
import { Node } from "./node";
import { CommandListNode } from "./commandListNode";
import {Context} from "./context";
// <program> ::= program <command list>
export class ProgramNode extends Node {
  commandListNode: Node;
  parse(context:Context): void {
    context.skipToken("program");
    this.commandListNode = new CommandListNode();
    this.commandListNode.parse(context);
  }
  toString(): string {
    return "[program " + this.commandListNode + "]";
  }
}