import TextBuilder from "./TextBuilder";

export default class Director {
  private builder: TextBuilder;

  constructor(builder: TextBuilder) {
    this.builder = builder;
  }

  setBuilder(builder: TextBuilder) {
    this.builder = builder;
    return this;
  }

  public build(): string {
    return this.builder.head() + this.builder.body() + this.builder.footer();
  }
}
