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

import Computer from "./Computer";

export default class ComputerBuilder {
  private hasGraphicCard: boolean;
  private hasMonitor: boolean;
  private hasTouchScreen: boolean;
  private hasCamera: boolean;
  private name: string;
  private color: string;

  constructor() {
    this.hasGraphicCard = false;
    this.hasMonitor = false;
    this.hasTouchScreen = false;
    this.hasCamera = false;
    this.name = "무제";
    this.color = "black";
  }

  setHasGraphicCard(hasGraphicCard: boolean) {
    this.hasGraphicCard = hasGraphicCard;
    return this;
  }

  setHasMonitor(hasMonitor: boolean) {
    this.hasMonitor = hasMonitor;
    return this;
  }

  setHasTouchScreen(hasTouchScreen: boolean) {
    this.hasTouchScreen = hasTouchScreen;
    return this;
  }

  setHasCamera(hasCamera: boolean) {
    this.hasCamera = hasCamera;
    return this;
  }

  setName(name: string) {
    this.name = name;
    return this;
  }

  setColor(color: string) {
    this.color = color;
    return this;
  }

  build(): Computer {
    const {
      name,
      color,
      hasCamera,
      hasTouchScreen,
      hasMonitor,
      hasGraphicCard,
    } = this;

    const computer = new Computer(
      name,
      color,
      hasCamera,
      hasTouchScreen,
      hasMonitor,
      hasGraphicCard
    );

    return computer;
  }
}
