import StandUpState from "./StandUpState";
import State from "./State";

export default class Player {
  private speed: number;
  private state: State;

  constructor() {
    this.speed = 0;
    this.state = new StandUpState(this);
  }

  setSpeed(speed: number) {
    this.speed = speed;
  }

  getSpeed() {
    return this.speed;
  }

  setState(state: State) {
    this.state = state;
  }

  getState() {
    return this.state;
  }

  talk(text: string) {
    console.log(`Player says : ${text}`);
  }
}
