// main.ts
import { DrawCanvas } from './drawCanvas';
import { MacroCommand } from './macroCommand';
import { DrawCommand } from './drawCommand';
const history = new MacroCommand();
const canvas = new DrawCanvas(history);
for (let i = 0; i < 10; i++) {
  const cmd = new DrawCommand(canvas, i, i);
  history.push(cmd);
}
canvas.paint();