import * as readline from "node:readline";
import { stdin as input, stdout as output } from "node:process";
import Player from "./Player";

input.resume();
input.setEncoding("utf-8");

const rl = readline.createInterface({ input, output });

function main() {
  const player = new Player();

  function recurcive() {
    rl.question(
      `player의 상태: ${player.getState().getDescription()}, 속도 ${
        player.getSpeed()
      } m/s
      
      [1] 앉기 [2] 서기 [3] 걷기 [4] 달리기 [5] 종료
      
      `,

      function (answer) {
        switch (answer.trim()) {
          case "1":
            player.getState().sitDown();
            break;
          case "2":
            player.getState().standUp();
            break;
          case "3":
            player.getState().walk();
            break;
          case "4":
            player.getState().run();
            break;
          case "5":
            console.log("프로그램 종료");
            return rl.close();
          default:
            console.log("해당 기능은 없어요`" + answer.trim() + "`");
            break;
        }

        recurcive();
      }
    );
  }

  recurcive();
}

main();
