// singleton.ts
// singleton.ts
export class Singleton {
  //NOTE - 尝试使用饿汉模式未成功, instance 还是为 undefined
  private static instance: Singleton | null = null;
  private static generatedId: number = 0;

  private constructor() {
    Singleton.generatedId++;
    console.log(`Singleton instance created with id: ${Singleton.generatedId}`);
  }

  public static getInstance(): Singleton {
    if (this.instance === null) {
      this.instance = new Singleton();
    }
    return this.instance;
  }
}