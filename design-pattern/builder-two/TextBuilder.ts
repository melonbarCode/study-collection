import TextData from "./TextData";

export default abstract class TextBuilder {
  protected data: TextData;

  constructor(data: TextData) {
    this.data = data;
  }

  abstract head(): string;
  abstract body(): string;
  abstract footer(): string;
}
