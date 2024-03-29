/**
 * 
    최솟값 구하기
    7개의 수가 주어지면 그 숫자 중 가장 작은 수를 출력하는 프로그램을 작성하세요.

    ▣ 입력설명
    첫 번째 줄에 7개의 수가 주어진다.
    ▣ 출력설명
    첫 번째 줄에 가장 작은 값을 출력한다.

    ▣ 입력예제 
    5 3 7 11 2 15 17

    ▣ 출력예제 
    2
 */

//내 문제 풀이
function solution(numbers) {
  let minNum = Number.MAX_SAFE_INTEGER;

  for (let num of numbers) {
    if (minNum > num) {
      minNum = num;
    }
  }

  return minNum;
}
