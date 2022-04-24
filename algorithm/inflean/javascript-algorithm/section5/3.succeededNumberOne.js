/**
*
    연속 부분수열 1
    N개의 수로 이루어진 수열이 주어집니다.
    이 수열에서 연속부분수열의 합이 특정숫자 M이 되는 경우가 몇 번 있는지 구하는 프로그램을
    작성하세요.
    만약 N=8, M=6이고 수열이 다음과 같다면
    1 2 1 3 1 1 1 2
    합이 6이 되는 연속부분수열은 {2, 1, 3}, {1, 3, 1, 1}, {3, 1, 1, 1}로 총 3가지입니다.

    ▣ 입력설명
    첫째 줄에 N(1≤N≤100,000), M(1≤M≤100,000,000)이 주어진다.
    수열의 원소값은 1,000을 넘지 않는 자연수이다.

    ▣ 출력설명
    첫째 줄에 경우의 수를 출력한다.

    ▣ 입력예제 1
    8 6
    1 2 1 3 1 1 1 2

    ▣ 출력예제 1
    3
 */

//나의 문제풀이
function solution(m = 0, nums = [0]) {
  let answer = 0;
  let slider = [];
  let totalPoint = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > m) {
      continue;
    }

    if (totalPoint + nums[i] > m) {
      totalPoint -= slider[0];
      slider.splice(0, 1);
      i--;
      continue;
    }

    if (totalPoint + nums[i] <= m) {
      totalPoint += nums[i];
      slider.push(nums[i]);

      if (totalPoint === m) {
        answer++;
      }
    }
  }

  return answer;
}

//다른 문제풀이
function solution2(m = 0, nums = [0]) {
  let answer = 0;
  let leftIdx = 0;
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    if (sum === m) answer++;

    while (sum >= m) {
      sum -= nums[leftIdx++];

      if (sum === m) answer++;
    }
  }

  return answer;
}

//YES
console.log(solution(6, [1, 2, 1, 3, 1, 1, 1, 2]));
console.log(solution2(6, [1, 2, 1, 3, 1, 1, 1, 2]));
