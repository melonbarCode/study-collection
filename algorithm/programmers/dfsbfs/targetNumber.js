/**
 * https://programmers.co.kr/learn/courses/30/lessons/43165
 */
function solution(numbers, target) {
  let answer = 0;
  dfs(0, 0);

  function dfs(idx, sum) {
    if (idx + 1 === numbers.length) {
      console.log(sum, target, idx, numbers.length);
      if (sum === target) answer++;
      return;
    }

    dfs(idx + 1, sum + numbers[idx]);
    dfs(idx + 1, sum - numbers[idx]);
  }

  return answer;
}

console.log(solution([1, 1, 1, 1, 1], 3));
