import Director from "./Director";
import JSONBuilder from "./JSONBuilder";
import PlainTextBuilder from "./PlainTextBuilder";
import TextData from "./TextData";
import XMLBuilder from "./XMLBuilder";

/**
 * Builder Pattern
 *
 * 복잡한 구성의 객체를 효과적으로 생성하는 패턴이며 2종류 정도가 있다.
 *
 * 잘 알려진 패턴은 2가지.
 *
 * 객체 생성 시 여러 단계를 순차적으로 거칠 때, 단계의 순서를 결정해 두고 각 단계를 구현할 수 있도록 하는 패턴
 *
 */
function main() {
  const personTextData = new TextData("diall", 31);

  const plaintextBuilder = new PlainTextBuilder(personTextData);
  const jsonBuilder = new JSONBuilder(personTextData);
  const xmlBuilder = new XMLBuilder(personTextData);

  const director = new Director(plaintextBuilder);
  console.log(director.build());
  console.log(director.setBuilder(jsonBuilder).build());
  console.log(director.setBuilder(xmlBuilder).build());
}

main();
