/**
*
조합 구하기
1부터 N까지 번호가 적힌 구슬이 있습니다. 이 중 M개를 뽑는 방법의 수를 출력하는 프로그
램을 작성하세요.
▣ 입력설명
첫 번째 줄에 자연수 N(3<=N<=10)과 M(2<=M<=N) 이 주어집니다.
▣ 출력설명
첫 번째 줄에 결과를 출력합니다. 맨 마지막 총 경우의 수를 출력합니다.
출력순서는 사전순으로 오름차순으로 출력합니다.


▣ 입력예제 1
4 2
▣ 출력예제 1
1 2
1 3
1 4
2 3
2 4
3 4
6
 */

//나의 문제풀이

function solution(n = 0, m = 0) {
  let answer = 0;
  let combiArr = [];
  let arr = Array.from({ length: m }, () => 0);
  let pArr = Array.from({ length: n + 1 }, () => 0);

  function check(arr) {
    for (let combi of combiArr) {
      const set = new Set(combi);
      const originSize = set.size;
      for (let a of arr) {
        set.add(a);
      }

      if (originSize === set.size) {
        return false;
      }
    }

    return true;
  }

  function dfs(v = 0) {
    if (v === m) {
      if (check(arr)) {
        console.log(arr);
        combiArr.push(arr.slice());
        answer++;
      }
    } else {
      for (let i = 1; i <= n; i++) {
        if (pArr[i] === 0) {
          pArr[i] = 1;
          arr[v] = i;
          dfs(v + 1);

          pArr[i] = 0;
        }
      }
    }
  }

  dfs(0);

  return answer;
}

//다른 문제 풀이

function solution2(n = 0, m = 0) {
  let answer = 0;
  let arr = Array.from({ length: m }, () => 0);

  function dfs(v = 0, s = 0) {
    if (v === m) {
      console.log(arr);
      answer++;
    } else {
      for (let i = s; i <= n; i++) {
        arr[v] = i;
        dfs(v + 1, i + 1);
      }
    }
  }

  dfs(0, 1);

  return answer;
}

//YES
console.log(solution(4, 2));
console.log(solution2(4, 2));
