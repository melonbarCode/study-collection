/**
*
수열 추측하기
가장 윗줄에 1부터 N까지의 숫자가 한 개씩 적혀 있다. 그리고 둘째 줄부터 차례대로 파스칼
의 삼각형처럼 위의 두개를 더한 값이 저장되게 된다. 예를 들어 N이 4 이고 가장 윗 줄에 3
1 2 4 가 있다고 했을 때, 다음과 같은 삼각형이 그려진다.
        3 1 2 4
         4 3 6
          7 9
          16
N과 가장 밑에 있는 숫자가 주어져 있을 때 가장 윗줄에 있는 숫자를 구하는 프로그램을 작성하
시오. 단, 답이 여러가지가 나오는 경우에는 사전순으로 가장 앞에 오는 것을 출력하여야 한다.

▣ 입력설명
첫째 줄에 두개의 정수 N(1≤N≤10)과 F가 주어진다. N은 가장 윗줄에 있는 숫자의 개수를 의
미하며 F는 가장 밑에 줄에 있는 수로 1,000,000 이하이다.

▣ 출력설명
첫째 줄에 삼각형에서 가장 위에 들어갈 N개의 숫자를 빈 칸을 사이에 두고 출력한다. 답이 존재
하지 않는 경우는 입력으로 주어지지 않는다.

▣ 입력예제 1
4 16

▣ 출력예제 1
3 1 2 4

 */

//나의 문제풀이
function solution(numLength = 4, lastNum = 0) {
  let answer = [];
  let flag = 0;
  let arr = Array.from({ length: numLength }, () => 0);
  let comArr = Array.from({ length: numLength }, () => 0);
  let pArr = Array.from({ length: 11 }, () => 0);

  function fac(f) {
    if (f === 1) {
      return 1;
    }

    return f * fac(f - 1);
  }

  function dfs(v = 0, sum = 0) {
    if (flag) return;

    if (v === numLength) {
      if (sum === lastNum) {
        answer = arr.slice();
        flag = 1;
      }
    } else {
      for (let i = 1; i <= pArr.length; i++) {
        if (pArr[i] === 0) {
          pArr[i] = i;
          arr[v] = i;
          dfs(v + 1, sum + comArr[v] * pArr[i]);
          pArr[i] = 0;
        }
      }
    }
  }

  for (let i = 0; i < numLength; i++) {
    const r = i;

    if (r === 0 || numLength - 1 - r === 0) {
      comArr[i] = 1;
      continue;
    }

    comArr[i] = fac(numLength - 1) / (fac(numLength - 1 - r) * fac(r));
  }

  dfs(0, 0);

  return answer;
}

//YES
console.log(solution(4, 16));
