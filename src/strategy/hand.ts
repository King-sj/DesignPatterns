// hand.ts
export enum HandValue {
  GUU = 0,
  CHO = 1,
  PAA = 2,
}
export class Hand {
  //NOTE - 使用了单例模式
  private static readonly hand: Hand[] = [
    new Hand(HandValue.GUU),
    new Hand(HandValue.CHO),
    new Hand(HandValue.PAA),
  ];
  private static readonly names: string[] = ['石头', '剪刀', '布'];
  private handValue: HandValue;
  private constructor(handValue: HandValue) {
    this.handValue = handValue;
  }
  static getHand(handValue: HandValue): Hand {
    return this.hand[handValue];
  }
  isStrongerThan(h: Hand): boolean {
    return this.fight(h) === 1;
  }
  isWeakerThan(h: Hand): boolean {
    return this.fight(h) === -1;
  }
  private fight(h: Hand): number {
    if (this === h) {
      return 0;
    } else if ((this.handValue + 1) % 3 === h.handValue) {
      return 1;
    } else {
      return -1;
    }
  }
  toString(): string {
    return Hand.names[this.handValue];
  }
}