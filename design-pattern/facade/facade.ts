/**
 * FACADE PATTERN
 *
 * 어떤 기능을 처리하기 위해 여러 객체들 사이의 복잡한 메서드 사용을 감춰서 단순화 시켜주는 패턴
 */

class DBRow {
  private name: string;
  private birthday: string;
  private email: string;

  constructor(name: string, birthday: string, email: string) {
    this.name = name;
    this.birthday = birthday;
    this.email = email;
  }

  getName() {
    return this.name;
  }

  getBirthday() {
    return this.birthday;
  }

  getEmail() {
    return this.email;
  }
}

class DBMS {
  private db = new Map<string, DBRow>();

  constructor() {
    this.db.set(
      "jaehyeon",
      new DBRow("JAEHYEON", "1992-11-11", "aaa@naver.com")
    );
    this.db.set("jaesa", new DBRow("JAESA", "1992-1-12", "abc@naver.com"));
    this.db.set("haha", new DBRow("HAHA", "1992-10-11", "ddd@naver.com"));
  }

  query(name: string): DBRow | undefined {
    return this.db.get(name.toLowerCase());
  }
}

class DBCache {
  private cache = new Map<string, DBRow>();

  put(row: DBRow): void {
    this.cache.set(row.getName().toLowerCase(), row);
  }

  getRow(name: string) {
    return this.cache.get(name.toLowerCase());
  }
}

class Message {
  private row: DBRow;

  constructor(row: DBRow) {
    this.row = row;
  }

  makeName() {
    return this.row.getName();
  }

  makeBirthday() {
    return this.row.getBirthday();
  }

  makeEmail() {
    return this.row.getEmail();
  }
}

class Facade {
  private dbms: DBMS = new DBMS();
  private cache: DBCache = new DBCache();

  run(name: string) {
    let row: DBRow | undefined = this.cache.getRow(name);

    if (!row) {
      row = this.dbms.query(name);

      if (row) {
        this.cache.put(row);
      }
    }

    if (row) {
      const message: Message = new Message(row);
      console.log(message.makeName());
      console.log(message.makeBirthday());
      console.log(message.makeEmail());
    } else {
      console.log("DATA DOESN'T EXISTS");
    }
  }
}

function main() {
  const facade: Facade = new Facade();
  const name: string = "jaehyeon";

  facade.run(name);
}

main();
