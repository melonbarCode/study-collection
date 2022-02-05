import TextBuilder from "./TextBuilder";
import TextData from "./TextData";

export default class PlainTextBuilder extends TextBuilder {
  constructor(data: TextData) {
    super(data);
  }

  head(): string {
    return "";
  }

  body(): string {
    return `name: ${this.data.getName()}, age: ${this.data.getAge()}`;
  }

  footer(): string {
    return "";
  }
}
