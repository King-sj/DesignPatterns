// macroCommand.ts
import { Command } from './command';
export class MacroCommand implements Command {
  private commands: Command[] = [];
  push(command: Command): void {
    this.commands.push(command);
  }
  undo(): void {
    this.commands.pop();
  }
  clear(): void {
    this.commands = [];
  }
  execute(): void {
    this.commands.forEach((command) => {
      command.execute();
    });
  }
}