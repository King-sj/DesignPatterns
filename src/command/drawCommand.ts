// drawCommand.ts
import { Command } from './command';
import { DrawCanvas } from './drawCanvas';
export class DrawCommand implements Command {
  private x: number;
  private y: number;

  constructor(private canv: DrawCanvas,x: number, y: number) {
    this.x = x;
    this.y = y;
  }
  execute(): void {
    this.canv.draw(this.x, this.y)
  }
}