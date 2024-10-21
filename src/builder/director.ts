// director.ts
import { Builder } from './builder';
export class Director {
  private builder: Builder;
  constructor(builder: Builder) {
    this.builder = builder;
  }
  public construct(): void {
    this.builder.makeTitle('问候');
    this.builder.makeString('从早上到下午');
    this.builder.makeItems(['早上好。', '下午好。']);
    this.builder.makeString('晚上');
    this.builder.makeItems(['晚上好。', '晚安。', '再见。']);
    this.builder.close();
  }
}