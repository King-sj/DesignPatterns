// main.ts
import { Entry } from './entry';
import { Directory } from './directory';
import { File } from './file';
console.log('Making root entries...');
let rootdir: Directory = new Directory('root');
let bindir: Directory = new Directory('bin');
let tmpdir: Directory = new Directory('tmp');
let usrdir: Directory = new Directory('usr');
rootdir.add(bindir);
rootdir.add(tmpdir);
rootdir.add(usrdir);
bindir.add(new File('vi', 10000));
bindir.add(new File('latex', 20000));
rootdir.printList();

console.log("Making user entries...");
let yuki: Directory = new Directory('yuki');
let hanako: Directory = new Directory('hanako');
let tomura: Directory = new Directory('tomura');
usrdir.add(yuki);
usrdir.add(hanako);
usrdir.add(tomura);
yuki.add(new File('diary.html', 100));
yuki.add(new File('Composite.java', 200));
hanako.add(new File('memo.tex', 300));
tomura.add(new File('game.doc', 400));
tomura.add(new File('junk.mail', 500));
rootdir.printList();