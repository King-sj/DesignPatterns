// builder.ts
export abstract class Builder {
  public abstract makeTitle(title: string): void;
  public abstract makeString(str: string): void;
  public abstract makeItems(items: string[]): void;
  public abstract close(): void;
}