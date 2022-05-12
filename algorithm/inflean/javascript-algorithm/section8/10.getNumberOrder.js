/**
*
순열 구하기
10이하의 N개의 자연수가 주어지면 이 중 M개를 뽑아 일렬로 나열하는 방법을 모두 출력합
니다.
▣ 입력설명
첫 번째 줄에 자연수 N(3<=N<=10)과 M(2<=M<=N) 이 주어집니다.
두 번째 줄에 N개의 자연수가 오름차순으로 주어집니다.
▣ 출력설명
첫 번째 줄에 결과를 출력합니다. 맨 마지막 총 경우의 수를 출력합니다.
출력순서는 사전순으로 오름차순으로 출력합니다.

▣ 입력예제 1
3 2
3 6 9

▣ 출력예제 1
3 6
3 9
6 3
6 9
9 3
9 6
6

 */

//나의 문제풀이

function solution(m = 0, nums = [0]) {
  let answer = [];

  function dfs(v = 0, total = [], arr = []) {
    if (v === m) {
      answer++;
      console.log(total);
      return;
    } else {
      for (let i = 0; i < arr.length; i++) {
        const temp = [...arr];
        const selectedArr = temp.splice(i, 1);
        dfs(v + 1, [...total, ...selectedArr], temp);
      }
    }
  }

  dfs(0, [], nums);

  return answer;
}

function solution2(m = 0, nums = [0]) {
  let answer = [];
  let nLength = nums.length;
  let arr = Array.from({ length: nLength }, () => 0);
  let tmp = Array.from({ length: m }, () => 0);

  function dfs(v = 0) {
    if (v === m) {
      answer.push(tmp.slice());
    } else {
      for (let i = 0; i < nLength; i++) {
        if (arr[i] === 0) {
          arr[i] = 1;
          tmp[v] = nums[i];

          dfs(v + 1);
          arr[i] = 0;
        }
      }
    }
  }

  dfs(0);

  return answer;
}

//YES
// console.log(solution(2, [3, 6, 9]));
console.log(solution2(2, [3, 6, 9]));
