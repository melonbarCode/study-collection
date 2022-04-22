/**
 * 
    격자판 최대합
    5*5 격자판에 아래롸 같이 숫자가 적혀있습니다.
    10 13 10 12 15
    12 39 30 23 11
    11 25 50 53 15
    19 27 29 37 27
    19 13 30 13 19
    N*N의 격자판이 주어지면 각 행의 합, 각 열의 합, 두 대각선의 합 중 가 장 큰 합을 출력합
    니다.

    ▣ 입력설명
    첫 줄에 자연수 N이 주어진다.(1<=N<=50)
    두 번째 줄부터 N줄에 걸쳐 각 줄에 N개의 자연수가 주어진다. 각 자연수는 100을 넘지 않는
    다.
    ▣ 출력설명
    최대합을 출력합니다.
    ▣ 입력예제 1
    5
    10 13 10 12 15
    12 39 30 23 11
    11 25 50 53 15
    19 27 29 37 27
    19 13 30 13 19
    ▣ 출력예제 1
    155
 */

//다른 문제풀이
function solution(n = 0, dimensions = [[0], [0]]) {
  let maxHorizonSum = 0;
  let maxVerticalSum = 0;
  let maxX1Sum = 0;
  let maxX2Sum = 0;

  for (let i = 0; i < dimensions.length; i++) {
    let horizonSum = 0;
    let verticalSum = 0;
    for (let j = 0; j < dimensions.length; j++) {
      horizonSum += dimensions[i][j];
      verticalSum += dimensions[j][i];
    }

    if (maxHorizonSum < horizonSum) {
      maxHorizonSum = horizonSum;
    }

    if (maxVerticalSum < verticalSum) {
      maxVerticalSum = verticalSum;
    }
  }

  for (let i = 0; i < dimensions.length; i++) {
    maxX1Sum += dimensions[i][i];
    maxX2Sum += dimensions[i][n - i - 1];
  }

  return Math.max(maxHorizonSum, maxVerticalSum, maxX1Sum, maxX2Sum);
}

//5
console.log(
  solution(5, [
    [10, 13, 10, 12, 15],
    [12, 39, 30, 23, 11],
    [11, 25, 50, 53, 15],
    [19, 27, 29, 37, 27],
    [19, 13, 30, 13, 19],
  ])
);
