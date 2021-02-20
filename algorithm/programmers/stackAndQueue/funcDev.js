// function solution(progresses = [], speeds = []) {
//   const deploys = [];

//   while (true) {
//     const progressLength = progresses.length;

//     for (let i = 0; i < progressLength; i++) {
//       progresses[i] += speeds[i];
//     }

//     if (progresses[0] >= 100) {
//       let endIndex = 0;

//       for (let i = 0; i < progressLength; i++) {
//         if (progresses[i] < 100) {
//           endIndex = i - 1;
//           break;
//         }

//         if (progresses[i] > 100 && i === progressLength - 1) {
//           endIndex = i;
//         }
//       }
//       speeds.splice(0, endIndex + 1);
//       deploys.push(endIndex + 1);
//       progresses = progresses.slice(endIndex + 1);
//       endIndex = 0;
//     }

//     if (progresses.length === 0) {
//       break;
//     }
//   }

//   return deploys;
// }

function solution(progresses = [], speeds = []) {
  const list = Array(progresses.length);

  const answer = [];

  for (let i = 0; i < progresses.length; i++) {
    list[i] = [progresses[i], speeds[i]];
  }

  while (true) {
    let count = 0;
    for (let i = 0; i < list.length; i++) {
      const progre = list[i][0] + list[i][1];
      list[i][0] = progre;
    }

    if (list[0][0] >= 100) {
      if (list.length === 1) {
        answer.push(1);
        return answer;
      }

      for (let i = 1; i < list.length; i++) {
        if (list[i][0] < 100) {
          count = i;
          break;
        }

        if (list[i][0] >= 100 && i === list.length - 1) {
          count = i + 1;
        }
      }
    }

    if (count) {
      answer.push(count);
      list.splice(0, count);
    }

    if (list.length === 0) {
      return answer;
    }
  }
}

console.log(solution([93, 30, 55], [1, 30, 5]));
console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]));
