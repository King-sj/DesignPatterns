// listVisitor.ts
import { Visitor } from "./visitor";
import { File } from "./file";
import { Directory } from "./directory";
import { Entry } from "./entry";
export class ListVisitor extends Visitor {
  private currentdir = "";
  visit(entry:Entry) {
    if (entry instanceof File) {
      console.log(`${this.currentdir}/${entry}`);
    } else if (entry instanceof Directory) {
      console.log(`${this.currentdir}/${entry}`);
      const savedir = this.currentdir;
      this.currentdir = `${this.currentdir}/${entry.getName()}`;
      const it: Entry[] = entry.iterator();
      for (let i = 0; i < it.length; i++) {
        it[i].accept(this);
      }
      this.currentdir = savedir;
    }
  }

}