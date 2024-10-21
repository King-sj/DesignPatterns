// main.ts
import { Manager } from './manager';
import { UnderlinePen } from './underlinePen';
import { MessageBox } from './messageBox';

let manager = new Manager();
let upen = new UnderlinePen('~');
let mbox = new MessageBox('*');
let sbox = new MessageBox('/');
manager.register('strong message', upen);
manager.register('warning box', mbox);
manager.register('slash box', sbox);

let p1 = manager.create('strong message');
p1.use('Hello, world.');
let p2 = manager.create('warning box');
p2.use('Hello, world.');
let p3 = manager.create('slash box');
p3.use('Hello, world.');
