// manager.ts
export class Manager {
  private showcase: { [key: string]: any } = {};
  register(name: string, proto: any) {
    this.showcase[name] = proto;
  }
  create(name: string): any {
    const p = this.showcase[name];
    return p.createClone();
  }
}