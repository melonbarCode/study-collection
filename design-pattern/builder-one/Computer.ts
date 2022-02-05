export default class Computer {
  private hasGraphicCard: boolean;
  private hasMonitor: boolean;
  private hasTouchScreen: boolean;
  private hasCamera: boolean;
  private name: string;
  private color: string;

  constructor(
    name: string,
    color: string,
    hasCamera: boolean,
    hasTouchScreen: boolean,
    hasMonitor: boolean,
    hasGraphicCard: boolean
  ) {
    this.name = name;
    this.color = color;
    this.hasCamera = hasCamera;
    this.hasTouchScreen = hasTouchScreen;
    this.hasMonitor = hasMonitor;
    this.hasGraphicCard = hasGraphicCard;
  }

  toString() {
    return `
        COMPUTER INFORMATION 

        name : ${this.name}
        color : ${this.color}
        hasCamera : ${this.hasCamera}
        hasTouchScreen : ${this.hasTouchScreen}
        hasMonitor : ${this.hasMonitor}
        hasGraphicCard : ${this.hasGraphicCard}
    
    `;
  }
}
