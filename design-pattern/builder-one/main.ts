/**
 * Builder Pattern
 *
 * 복잡한 구성의 객체를 효과적으로 생성하는 패턴이며 2종류 정도가 있다.
 *
 * 잘 알려진 패턴은 2가지.
 *
 * 이번껀 생성시 지정해야할 인자가 많을 때 사용하는 패턴.
 *
 */

import ComputerBuilder from "./ComputerBuilder";

function main() {
  const builder: ComputerBuilder = new ComputerBuilder();

  builder
    .setName("SAMSUNG COMPUTER")
    .setColor("RED")
    .setHasCamera(true)
    .setHasGraphicCard(true)
    .setHasMonitor(true)
    .setHasTouchScreen(true);

  //BUILDER 클래스로 미리 생성자 셋팅을 준비해 놓은 다음 자신이 원할 떄 create 메서드를 호출하여 Computer class 객체를 생성할 수 있음.

  const computer = builder.build();

  console.log(computer);
}

main();
