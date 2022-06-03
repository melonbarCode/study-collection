// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let answer = Number.MAX_SAFE_INTEGER;
  let sum = 0;
  let otherSum = A.reduce((a, c) => a + c, 0);

  for (let i = 0; i < A.length - 1; i++) {
    const num = A[i];

    sum += num;
    otherSum -= num;

    answer = Math.min(Math.abs(sum - otherSum), answer);
  }

  return answer;
}
