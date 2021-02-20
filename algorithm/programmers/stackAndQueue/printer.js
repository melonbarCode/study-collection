/**
 * https://programmers.co.kr/learn/courses/30/lessons/42587
 * @param {*} priorities
 * @param {*} location
 */
function solution(priorities, location) {
  let nowLocation = location;
  let order = 0;
  while (true) {
    let firstOrderPrint = priorities.shift();
    const index = priorities.findIndex((v) => firstOrderPrint < v);
    if (index !== -1) {
      priorities.push(firstOrderPrint);
      if (nowLocation === 0) {
        nowLocation = priorities.length - 1;
      } else {
        nowLocation--;
      }
    } else {
      order++;
      if (nowLocation === 0) return order;
      nowLocation--;
    }
  }
}

console.log(solution([1, 1, 9, 1, 1, 1], 0));
