// drawCanvas.ts
import { Drawable } from './drawable';
import { MacroCommand } from './macroCommand';
export class DrawCanvas implements Drawable {
  private history: MacroCommand;
  constructor(history: MacroCommand) {
    this.history = history;
  }
  paint(): void {
    this.history.execute();
  }
  draw(x: number, y: number): void {
    console.log(`Drawing at (${x}, ${y})`);
  }
}