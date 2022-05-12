/**
*
동전교환

다음과 같이 여러 단위의 동전들이 주어져 있을때 거스름돈을 가장 적은 수의 동전으로 교환
해주려면 어떻게 주면 되는가? 각 단위의 동전은 무한정 쓸 수 있다.

▣ 입력설명
첫 번째 줄에는 동전의 종류개수 N(1<=N<=12)이 주어진다. 두 번째 줄에는 N개의 동전의 종
류가 주어지고, 그 다음줄에 거슬러 줄 금액 M(1<=M<=500)이 주어진다.
각 동전의 종류는 100원을 넘지 않는다.

▣ 출력설명
첫 번째 줄에 거슬러 줄 동전의 최소개수를 출력한다.

▣ 입력예제 1
3
1 2 5
15

▣ 출력예제 1
3
설명 : 5 5 5 동전 3개로 거슬러 줄 수 있다.
 */

//나의 문제풀이
function solution(coinKind = [0], change = 0) {
  let answer = 0;
  let flag = 0;

  function dfs(v = [], sum = 0) {
    if (flag) return;

    if (sum >= change) {
      if (sum === change) {
        answer = v.length;
        flag = 1;
      }

      return;
    } else {
      for (let i = coinKind.length - 1; i >= 0; i--) {
        dfs([...v, coinKind[i]], sum + coinKind[i]);
      }
    }
  }

  dfs([], 0);
  return answer;
}

//다른 풀이
function solution2(coinKind = [0], change = 0) {
  let answer = Number.MAX_SAFE_INTEGER;
  let flag = 0;

  function dfs(v = 0, sum = 0) {
    if (flag) return;
    if (answer <= v) return;

    if (sum === change) {
      if (answer > v) {
        answer = v.length;
      }

      return;
    } else {
      for (let i = coinKind.length - 1; i >= 0; i--) {
        dfs(v + 1, sum + coinKind[i]);
      }
    }
  }

  dfs([], 0);
  return answer;
}

//YES
console.log(solution([1, 2, 5], 23));
console.log(solution2([1, 2, 5], 23));
