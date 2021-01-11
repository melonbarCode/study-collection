/**
 *
 * https://programmers.co.kr/learn/courses/30/lessons/17681
 *
 */

function solution(n, arr1, arr2) {
  const length = n,
    answer = [];

  for (let i = 0; i < length; i++) {
    answer.push(
      (arr1[i] | arr2[i])
        .toString(2)
        .padStart(length, "0")
        .replace(/[0]{1}/g, " ")
        .replace(/[1]{1}/g, "#")
    );
  }

  return answer;
}

//또다른 풀이
function solution2(n, arr1, arr2) {
  return arr1.map((v, i) =>
    (v | arr2[i])
      .toString(2)
      .padStart(n, "0")
      .replace(/1|0/g, (e) => (+e ? "#" : " "))
  );
}
