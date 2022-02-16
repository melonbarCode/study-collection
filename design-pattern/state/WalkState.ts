import Player from "./Player";
import RunState from "./RunState";
import SitDownState from "./SitDownState";
import StandUpState from "./StandUpState";
import State from "./State";

export default class WalkState extends State {
  static DEFAULT_SPEED: number = 5;

  constructor(player: Player) {
    super(player);
  }

  standUp() {
    this.player.talk("잠시 서있자");
    this.player.setState(new StandUpState(this.player));
  }

  sitDown() {
    this.player.talk("걷는 중인데 앉으라고 하면 위험해요: 앉을게요");
    this.player.setState(new SitDownState(this.player));
  }
  walk() {
    this.player.talk("이미 걷고 있어요");
  }
  run() {
    this.player.talk("충분히 걸었으니, 슬슬 뛰어볼까요");
    this.player.setSpeed(RunState.DEFAULT_SPEED);
    this.player.setState(new RunState(this.player));
  }

  getDescription() {
    return "걷고 있음";
  }
}
