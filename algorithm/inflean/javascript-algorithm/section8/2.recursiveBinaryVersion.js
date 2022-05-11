/**
*
재귀함수를 이용한 이진수 출력
10진수 N이 입력되면 2진수로 변환하여 출력하는 프로그램을 작성하세요. 단 재귀함수를 이용
해서 출력해야 합니다.

▣ 입력설명
첫 번째 줄에 10진수 N(1<=N<=1,000)이 주어집니다.
▣ 출력설명
첫 번째 줄에 이진수를 출력하세요.

▣ 입력예제 1
11
▣ 출력예제 1
1011

 */

//나의 문제풀이
function solution(num = 0) {
  let answer = "";

  function re(n = 0) {
    if (n === 0) {
      return;
    }

    re(parseInt(n / 2));
    answer += String(n % 2);
  }

  re(num);
  return answer;
}

//YES
console.log(solution(11));

console.log(Number(11).toString(2));
