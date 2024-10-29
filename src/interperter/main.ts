// main.ts
import { Context } from "./context";
import { ProgramNode } from "./programNode";

// <program> ::= program <command list>
// <command list> ::= <command>* end
// <command> ::= <repeat command> | <primitive command>
// <repeat command> ::= repeat <number> <command list>
// <primitive command> ::= go | right | left

let programs =
  "program end\n"+
  "program go end\n"+
  "program go right go right go right end\n"+
  "program repeat 4 go right end end\n"+
  "program repeat 4 repeat 3 go right go left end right end end\n";

programs.split("\n").forEach((text:string)=>{
  if (text.length == 0) return;
  console.log(`current:\n ${text}\n`)
  let node = new ProgramNode()
  node.parse(new Context(text))
  console.log(`node = ${node}`)
})