/**
 *
 * https://programmers.co.kr/learn/courses/30/lessons/42862
 * @param {*} n
 * @param {*} lost
 * @param {*} reserve
 */
function solution(n, lost, reserve) {
  const filteredLost = lost.filter((a) => !reserve.includes(a));
  const filteredReserve = reserve.filter((a) => !lost.includes(a));

  const lostNum = filteredLost.filter((a) => {
    const b = filteredReserve.find((r) => Math.abs(r - a) === 1);
    if (!b) return true;
    filteredReserve = filteredReserve.filter((r) => r !== b);
  }).length;
  
  return n - lostNum;
}

console.log(solution(5, [2, 4], [1, 3, 5]));
