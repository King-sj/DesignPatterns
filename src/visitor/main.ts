// main.ts
import { Directory } from "./directory";
import { File } from "./file";
import { ListVisitor } from "./listVisitor";

console.log("Making root entries...");
let rootdir = new Directory("root");
let bindir = new Directory("bin");
let tmpdir = new Directory("tmp");
let usrdir = new Directory("usr");
rootdir.add(bindir);
rootdir.add(tmpdir);
rootdir.add(usrdir);
bindir.add(new File("vi", 10000));
bindir.add(new File("latex", 20000));
rootdir.accept(new ListVisitor());

console.log("Making user entries...");
let yuki = new Directory("yuki");
let hanako = new Directory("hanako");
let tomura = new Directory("tomura");
usrdir.add(yuki);
usrdir.add(hanako);
usrdir.add(tomura);
yuki.add(new File("diary.html", 100));
yuki.add(new File("Composite.java", 200));
hanako.add(new File("memo.tex", 300));
tomura.add(new File("game.doc", 400));
tomura.add(new File("junk.mail", 500));
rootdir.accept(new ListVisitor());
