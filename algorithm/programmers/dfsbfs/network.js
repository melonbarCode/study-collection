/**
 * https://programmers.co.kr/learn/courses/30/lessons/43162
 * @param {*} n
 * @param {*} computers
 */
function solution(n, computers = [[]]) {
  let answer = 0;
  
  const visited = [];

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      answer++;
      dfs(i, computers, visited);
    }
  }

  function dfs(start, computers, visited) {
    visited[start] = true;

    for (let i = 0; i < computers.length; i++) {
      if (!visited[i] && computers[start][i]) {
        dfs(i, computers, visited);
      }
    }
  }

  return answer
}

console.log(
  solution(3, [
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1],
  ])
);
