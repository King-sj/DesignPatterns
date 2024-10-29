// commandListNode.ts
import { Node } from "./node";
import { Context } from "./context";
import { CommandNode } from "./commandNode";
// <command list> ::= <command>* end
export class CommandListNode extends Node {
  list: Node[] = [];
  parse(context: Context): void {
    while (true) {
      if (context.getCurrentToken() === null) {
        throw new Error("Missing 'end'");
      } else if (context.getCurrentToken() === "end") {
        context.skipToken("end");
        break;
      } else {
        const commandNode = new CommandNode();
        commandNode.parse(context);
        this.list.push(commandNode);
      }
    }
  }
  toString(): string {
    return this.list.join("");
  }
}