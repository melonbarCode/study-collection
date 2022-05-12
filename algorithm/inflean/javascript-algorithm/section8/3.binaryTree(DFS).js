/**
*
이진트리 순회(깊이우선탐색)
아래 그림과 같은 이진트리를 전위순회와 후위순회를 연습해보세요.
        1
      2   3
    4  5 6  7

전위순회 출력 : 1 2 4 5 3 6 7
중위순회 출력 : 4 2 5 1 6 3 7
후위순회 출력 : 4 5 2 6 7 3 1
 */

//나의 문제풀이
function solution(num = 0) {
  let answer;

  function dfs(n = 0) {
    if (n > 7) {
      return;
    } else {
      dfs(n * 2);
      console.log(n);
      dfs(n * 2 + 1);
    }
  }

  dfs(num);
  return answer;
}

//YES
console.log(solution(1));
