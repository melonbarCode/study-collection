import Player from "./Player";
import State from "./State";
import RunState from "./RunState";
import SitDownState from "./SitDownState";
import WalkState from "./WalkState";

export default class StandUpState extends State {
  constructor(player: Player) {
    super(player);
  }

  standUp() {
    this.player.talk("이미 일어난 상태인데요?");
  }

  sitDown() {
    this.player.talk("힘든데 앉아 있어볼까?");
    this.player.setState(new SitDownState(this.player));
  }
  walk() {
    this.player.talk("슬슬 걸어보자");
    this.player.setSpeed(WalkState.DEFAULT_SPEED);
    this.player.setState(new WalkState(this.player));
  }
  run() {
    this.player.talk("힘들지만 바로 뛰자");
    this.player.setSpeed(RunState.DEFAULT_SPEED);
    this.player.setState(new RunState(this.player));
  }

  getDescription() {
    return "서 있음";
  }
}
