/**
*
두 배열 합치기
오름차순으로 정렬이 된 두 배열이 주어지면 두 배열을 오름차순으로 합쳐 출력하는 프로그램
을 작성하세요.
▣ 입력설명
첫 번째 줄에 첫 번째 배열의 크기 N(1<=N<=100)이 주어집니다.
두 번째 줄에 N개의 배열 원소가 오름차순으로 주어집니다.
세 번째 줄에 두 번째 배열의 크기 M(1<=M<=100)이 주어집니다.
네 번째 줄에 M개의 배열 원소가 오름차순으로 주어집니다.
각 리스트의 원소는 int형 변수의 크기를 넘지 않습니다.
▣ 출력설명
오름차순으로 정렬된 배열을 출력합니다.

▣ 입력예제 1
3
1 3 5
5
2 3 6 7 9
▣ 출력예제 1
1 2 3 3 5 6 7 9
 */

//나의 문제풀이
function solution(arrOne = [0], arrTwo = [0]) {
  let oneIdx = 0;
  let twoIdx = 0;
  let answer = [];

  while (oneIdx < arrOne.length || twoIdx < arrTwo.length) {
    if (arrOne[oneIdx] === arrTwo[twoIdx]) {
      answer.push(arrOne[oneIdx]);
      answer.push(arrOne[twoIdx]);

      oneIdx++;
      twoIdx++;
    } else if (arrOne[oneIdx] > arrTwo[twoIdx]) {
      answer.push(arrTwo[twoIdx]);
      twoIdx++;
    } else if (arrOne[oneIdx] < arrTwo[twoIdx]) {
      answer.push(arrOne[oneIdx]);

      oneIdx++;
    } else if (oneIdx >= arrOne.length) {
      answer.push(arrTwo[twoIdx]);
      twoIdx++;
    } else if (twoIdx >= arrTwo.length) {
      answer.push(arrOne[oneIdx]);
      oneIdx++;
    }
  }

  return answer;
}

//다른 문제 풀이

function solution2(arrOne = [0], arrTwo = [0]) {
  let oneIdx = 0;
  let twoIdx = 0;
  let answer = [];
  let n = arrOne.length;
  let m = arrTwo.length;

  while (oneIdx < n && twoIdx < m) {
    if (arrOne[oneIdx] >= arrTwo[twoIdx]) answer.push(arrTwo[twoIdx++]);
    else answer.push(arrOne[oneIdx++]);
  }

  while (oneIdx < n) {
    answer.push(arrOne[oneIdx++]);
  }

  while (twoIdx < m) {
    answer.push(arrTwo[twoIdx++]);
  }

  return answer;
}

//YES
console.log(solution([1, 3, 5], [2, 3, 6, 7, 9]));
console.log(solution2([1, 3, 5], [2, 3, 6, 7, 9]));
