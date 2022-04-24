/**
*
최대 매출
현수의 아빠는 제과점을 운영합니다. 현수 아빠는 현수에게 N일 동안의 매출기록을 주고 연속
된 K일 동안의 최대 매출액이 얼마인지 구하라고 했습니다.
만약 N=10이고 10일 간의 매출기록이 아래와 같습니다. 이때 K=3이면
12 15 11 20 25 10 20 19 13 15
연속된 3일간의 최대 매출액은 11+20+25=56만원입니다.
여러분이 현수를 도와주세요.
▣ 입력설명
첫 줄에 N(5<=N<=100,000)과 K(2<=K<=N)가 주어집니다.
두 번째 줄에 N개의 숫자열이 주어집니다. 각 숫자는 500이하의 음이 아닌 정수입니다.
▣ 출력설명
첫 줄에 최대 매출액을 출력합니다.
▣ 입력예제 1
10 3
12 15 11 20 25 10 20 19 13 15

▣ 출력예제 1
56

 */

//나의 문제풀이
function solution(m = 0, nums = [0]) {
  let answer = 0;

  for (i = m - 1; i < nums.length; i++) {
    answer = Math.max(answer, nums[i] + nums[i - 1] + nums[i - 2]);
  }

  return answer;
}

//다른 문제풀이
function solution2(m = 0, nums = [0]) {
  let answer = 0;
  let sum = 0;

  for (let i = 0; i < m; i++) {
    sum += nums[i];
  }

  answer = sum;

  for (let i = m; i < nums.length; i++) {
    sum = answer - nums[i - m] + nums[m];

    answer = Math.max(sum, answer);
  }

  return answer;
}

//YES
console.log(solution(3, [12, 15, 11, 20, 25, 10, 20, 19, 13, 15]));
console.log(solution(5, [12, 15, 11, 20, 25, 10, 20, 19, 13, 15]));
