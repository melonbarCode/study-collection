import Player from "./Player";
import State from "./State";
import StandUpState from "./StandUpState";

export default class SitDownState extends State {
  constructor(player: Player) {
    super(player);
  }

  standUp() {
    this.player.talk("슬슬 일어나보자?");
    this.player.setState(new StandUpState(this.player));
  }

  sitDown() {
    this.player.talk("이미 앉아 있어요");
  }

  walk() {
    this.player.talk("앉아 있는 상태라 못걸어요 : 일어 날게요");
    this.player.setState(new StandUpState(this.player));
  }

  run() {
    this.player.talk("앉아 있는 상태라 못 뛰어요: 우선 일어 날게요");
    this.player.setState(new StandUpState(this.player));
  }

  getDescription() {
    return "앉아 있음";
  }
}
