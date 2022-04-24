/**
*
    공통원소 구하기
    A, B 두 개의 집합이 주어지면 두 집합의 공통 원소를 추출하여 오름차순으로 출력하는 프로
    그램을 작성하세요.
    ▣ 입력설명
    첫 번째 줄에 집합 A의 크기 N(1<=N<=30,000)이 주어집니다.
    두 번째 줄에 N개의 원소가 주어집니다. 원소가 중복되어 주어지지 않습니다.
    세 번째 줄에 집합 B의 크기 M(1<=M<=30,000)이 주어집니다.
    네 번째 줄에 M개의 원소가 주어집니다. 원소가 중복되어 주어지지 않습니다.
    각 집합의 원소는 1,000,000,000이하의 자연수입니다.
    ▣ 출력설명
    두 집합의 공통원소를 오름차순 정렬하여 출력합니다.

    ▣ 입력예제 1
    5
    1 3 9 5 2
    5
    3 2 5 7 8

    ▣ 출력예제
    2 3 5
 */

//나의 문제풀이
function solution(arrOne = [0], arrTwo = [0]) {
  let obj = {};
  let answer = [];

  for (let i of arrOne) {
    obj[i] ? obj[i]++ : (obj[i] = 1);
  }

  for (let i of arrTwo) {
    obj[i] ? obj[i]++ : (obj[i] = 1);
  }

  for (let key of Object.keys(obj)) {
    if (obj[key] > 1) {
      answer.push(key);
    }
  }

  answer.sort((a, b) => a - b);

  return answer;
}

//다른 문제풀이
function solution2(arrOne = [0], arrTwo = [0]) {
  let obj = {};
  let answer = [];

  let po = 0,
    pt = 0;

  arrOne.sort((a, b) => a - b);
  arrTwo.sort((a, b) => a - b);

  while (arrOne.length > po && arrTwo.length > pt) {
    if (arrOne[po] === arrTwo[pt]) {
      answer.push(arrOne[po++]);
      pt++;
    } else if (arrOne[po] > arrTwo[pt]) {
      pt++;
    } else {
      po++;
    }
  }

  answer.sort((a, b) => a - b);

  return answer;
}

//YES
console.log(solution([1, 3, 9, 5, 2], [3, 2, 5, 7, 8]));
console.log(solution2([1, 3, 9, 5, 2], [3, 2, 5, 7, 8]));
