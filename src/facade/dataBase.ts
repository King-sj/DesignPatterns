// dataBase.ts
export class DataBase {
  static mailData: { [key: string]: string } = {
    'hyuki@hyuki.com': 'Hiroshi Yuki',
    'hanako@hyuki.com': 'Hanako Sato',
    'tomura@hyuki.com': 'Tomura',
    'mamoru@hyuki.com': 'Mamoru Takahashi',
  };
  private constructor() {}
  static getProperties(databaseName: string) {
    return DataBase.mailData;
  }
}