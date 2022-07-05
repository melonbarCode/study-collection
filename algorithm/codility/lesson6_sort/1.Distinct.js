// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)

  let answer = 0;
  let map = {};

  for (let i = 0; i < A.length; i++) {
    map[A[i]] ? map[A[i]]++ : (map[A[i]] = 1);
  }

  answer = Object.keys(map).length;

  return answer;
}
