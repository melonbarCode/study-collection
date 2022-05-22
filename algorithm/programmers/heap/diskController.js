/**
 * https://programmers.co.kr/learn/courses/30/lessons/42627
 */
function solution(jobs) {
  let answer = Number.MAX_SAFE_INTEGER;
  let jobsLength = jobs.length;
  let pArr = Array.from({ length: jobsLength }, () => 0);

  function dfs(v, order = [[0, 0]]) {
    if (v === jobsLength) {
      let time = 0;
      let total = order.reduce((a, b) => {
        let tempTime = time;
        time += b[1];

        if (tempTime > b[0]) {
          return a + (tempTime - b[0] + b[1]);
        }

        return a + (b[1] - b[0]);
      }, 0);

      answer = Math.min(total / 3, answer);
    } else {
      for (let i = 0; i < pArr.length; i++) {
        if (pArr[i] === 0) {
          pArr[i] = 1;

          dfs(v + 1, [...order, jobs[i]]);
          pArr[i] = 0;
        }
      }
    }
  }

  dfs(0, []);

  return answer;
}

function solution2(jobs) {
  let answer = 0;
  const q = [];

  jobs.sort((a, b) => a[0] - b[0]);

  let jobsLength = jobs.length;
  let i = 0;
  let now = 0;

  while (i < jobsLength || q.length > 0) {
    if (i < jobsLength && jobs[i][0] <= now) {
      q.push(jobs[i++]);
      continue;
    }

    q.sort((a, b) => a[1] - b[1]);

    if (q.length > 0) {
      let job = q.shift();
      now += job[1];
      answer += now - job[0];
    } else {
      now = jobs[i][0];
    }
  }

  return Math.floor(answer/jobsLength);
}

console.log(
  solution([
    [0, 3],
    [1, 9],
    [2, 6],
  ])
);

console.log(
  solution2([
    [0, 3],
    [1, 9],
    [2, 6],
  ])
);



console.log(2**0)
console.log(2**1)
console.log(2**2)
console.log(2**3)