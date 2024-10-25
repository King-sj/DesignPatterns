// displayImpl.ts
export abstract class DisplayImpl{
  abstract rawOpen(): void;
  abstract rawPrint(): void;
  abstract rawClose(): void;
}