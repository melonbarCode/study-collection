/**
 * https://programmers.co.kr/learn/courses/30/lessons/42842
 * @param {*} brown
 * @param {*} yellow
 */
function solution(brown, yellow) {
  const term = Math.sqrt((brown + 4) ** 2 / 4 - 4 * (brown + yellow));
  const w = ((brown + 4) / 2 + term) / 2;
  const h = ((brown + 4) / 2 - term) / 2;
  return [w, h];
}

console.log(solution(8, 1));
