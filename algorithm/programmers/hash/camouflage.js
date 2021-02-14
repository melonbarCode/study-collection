/**
 * https://programmers.co.kr/learn/courses/30/lessons/42578
 * @param {*} clothes
 */
function solution(clothes = []) {
  let count = 1;
  const kinds = clothes.reduce(
    (p, c) => (p[c[1]] ? p[c[1]]++ : (p[c[1]] = 1), p),
    {}
  );
  for (let key in kinds) {
    count *= kinds[key] + 1;
  }

  return count - 1;
}

console.log(
  solution([
    ["yellow_hat", "headgear"],
    ["blue_sunglasses", "eyewear"],
    ["green_turban", "headgear"],
  ])
);
