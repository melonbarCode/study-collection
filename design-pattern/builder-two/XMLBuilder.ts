import TextBuilder from "./TextBuilder";
import TextData from "./TextData";

export default class XMLBuilder extends TextBuilder {
  constructor(data: TextData) {
    super(data);
  }

  head(): string {
    return `<?xml version="1.0" encoding="utf-8" ?><DATA>`;
  }

  body(): string {
    return `<NAME>${this.data.getName()}</NAME><AGE>${this.data.getAge()}</AGE>`;
  }

  footer(): string {
    return "</DATA>";
  }
}
