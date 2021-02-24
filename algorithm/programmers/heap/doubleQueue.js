/**
 * https://programmers.co.kr/learn/courses/30/lessons/42628
 * @param {*} operations
 *
 */
function solution(operations) {
  const queue = [];

  for (let oper of operations) {
    const [command, number] = oper.split(" ");

    switch (command) {
      case "I":
        queue.push(+number);
        break;
      case "D":
        if (queue.length === 0) break;

        number === "1"
          ? queue.splice(queue.indexOf(Math.max.apply(null, queue)), 1)
          : queue.splice(queue.indexOf(Math.min.apply(null, queue)), 1);

        console.log(queue);
        break;
      default:
        break;
    }
  }

  if (queue.length === 0) {
    return [0, 0];
  }

  queue.sort((a, b) => a - b);

  return [queue[queue.length - 1], queue[0]];
}

console.log(
  solution([
    "I -45",
    "I 653",
    "D 1",
    "I -642",
    "I 45",
    "I 97",
    "D 1",
    "D -1",
    "I 333",
  ])
);

// console.log(solution(["I 7", "I 5", "I -5", "D -1"]));//

// 전 다른 풀이
// function solution(operations) {
//   const queue = [];

//   for (let oper of operations) {
//     const [command, number] = oper.split(" ");

//     switch (command) {
//       case "I":
//         queue.push(+number);
//         queue.sort((a, b) => a - b);
//         break;
//       case "D":
//         number === "1" ? queue.pop() : queue.shift();
//         break;
//       default:
//         break;
//     }
//   }

//   if (queue.length === 0) {
//     return [0, 0];
//   }

//   return [queue[queue.length - 1], queue[0]];
// }
