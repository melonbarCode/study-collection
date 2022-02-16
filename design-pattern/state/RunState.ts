import Player from "./Player";
import State from "./State";
import WalkState from "./WalkState";

export default class RunState extends State {
  static DEFAULT_SPEED: number = 20;
  static MAX_SPEED: number = 24;

  constructor(player: Player) {
    super(player);
  }

  standUp() {
    this.player.talk("바로 멈추면 위험해요. 천천히 걷을게요 우선");
    this.player.setState(new WalkState(this.player));
  }

  sitDown() {
    this.player.talk("뛰고 있는데 어떻게 앉아요 이사람아");
  }

  walk() {
    this.player.talk("힘들다 잠시만 걷자");
    this.player.setSpeed(WalkState.DEFAULT_SPEED);
    this.player.setState(new WalkState(this.player));
  }

  run() {
    const currentSpeed = this.player.getSpeed();

    if (currentSpeed > RunState.MAX_SPEED) {
      this.player.talk("이제 그만 더는 못뛰어요. 걸을게요");
      this.player.setSpeed(WalkState.DEFAULT_SPEED);
      this.player.setState(new WalkState(this.player));
      return;
    }

    this.player.talk("속도를 올려보자");
    this.player.setSpeed(this.player.getSpeed() + 2);
  }

  getDescription() {
    return "뛰고 있어요";
  }
}
