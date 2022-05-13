/**
*
경로 탐색(인접행렬)
방향그래프가 주어지면 1번 정점에서 N번 정점으로 가는 모든 경로의 가지 수를 출력하는 프
로그램을 작성하세요. 아래 그래프에서 1번 정점에서 5번 정점으로 가는 가지 수는

1 2 3 4 5
1 2 5
1 3 4 2 5
1 3 4 5
1 4 2 5
1 4 5

총 6 가지입니다.

▣ 입력설명
첫째 줄에는 정점의 수 N(1<=N<=20)와 간선의 수 M가 주어진다. 그 다음부터 M줄에 걸쳐 연
결정보가 주어진다.
▣ 출력설명
총 가지수를 출력한다.


▣ 입력예제 1
5 9
1 2
1 3
1 4
2 1
2 3
2 5
3 4
4 2
4 5

▣ 출력예제 1
6


 */

//나의 문제풀이
function solution(routes = [[0, 0]]) {
  let answer = 0;
  let nodes = Array.from({ length: routes.length }, () => 0);
  let pArr = Array.from({ length: 21 }, () => 0);
  let moves = Array.from({ length: 21 }, () => 0);

  function dfs(v = 0, lastNode = 0) {
    if (lastNode === 5) {
      console.log(moves.filter((a) => a));
      answer++;
    } else {
      for (let i = 0; i < routes.length; i++) {
        if (
          nodes[i] === 0 &&
          lastNode === routes[i][0] &&
          pArr[routes[i][1]] === 0
        ) {
          nodes[i] = 1;
          moves[v + 1] = routes[i][1];
          pArr[routes[i][1]] = 1;
          dfs(v + 1, routes[i][1]);
          nodes[i] = 0;
          moves[v + 1] = 0;
          pArr[routes[i][1]] = 0;
        }
      }
    }
  }

  for (let i = 0; i < routes.length; i++) {
    if (routes[i][0] === 1) {
      nodes[i] = 1;
      moves[0] = 1;
      moves[1] = routes[i][1];
      pArr[1] = 1;
      pArr[routes[i][1]] = 1;
      dfs(1, routes[i][1]);
      nodes[i] = 0;
      moves[0] = 0;
      moves[1] = 0;
      pArr[1] = 0;
      pArr[routes[i][1]] = 0;
    }
  }

  return answer;
}

function solution2(n, routes = [[0, 0]]) {
  let answer = 0;

  let graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
  let ch = Array.from({ length: n + 1 }, () => 0);
  let path = [];

  for (let [a, b] of routes) {
    graph[a][b] = 1;
  }

  function dfs(v) {
    if (v === n) {
      answer++;
      console.log(path);
    } else {
      for (let i = 1; i <= n; i++) {
        if (graph[v][i] === 1 && ch[i] === 0) {
          ch[i] = 1;
          path.push(i);
          dfs(i);
          ch[i] = 0;
          path.pop();
        }
      }
    }
  }

  path.push(1);
  ch[1] = 1;
  dfs(1);

  return answer;
}

//YES
console.log(
  solution([
    [1, 2],
    [1, 3],
    [1, 4],
    [2, 1],
    [2, 3],
    [2, 5],
    [3, 4],
    [4, 2],
    [4, 5],
  ])
);

console.log(
  solution2(5, [
    [1, 2],
    [1, 3],
    [1, 4],
    [2, 1],
    [2, 3],
    [2, 5],
    [3, 4],
    [4, 2],
    [4, 5],
  ])
);
