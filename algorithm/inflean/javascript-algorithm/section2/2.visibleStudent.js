/**
 * 
    보이는 학생
    선생님이 N(1<=N<=1000)명의 학생을 일렬로 세웠습니다. 일렬로 서 있는 학생의 키가 앞에
    서부터 순서대로 주어질 때, 맨 앞에 서 있는 선생님이 볼 수 있는 학생의 수를 구하는 프로그
    램을 작성하세요. (앞에 서 있는 사람들보다 크면 보이고, 작거나 같으면 보이지 않습니다.)
    ▣ 입력설명
    첫 줄에 정수 N이 입력된다. 그 다음줄에 N명의 학생의 키가 앞에서부터 순서대로 주어진다.
    ▣ 출력설명
    선생님이 볼 수 있는 최대학생수를 출력한다.

    ▣ 입력예제 1
    8
    130 135 148 140 145 150 150 153
    ▣ 출력예제 1
    5
 */

//다른 문제풀이
function solution(n = 0, students = [0]) {
  let max = Number.MIN_SAFE_INTEGER;
  let answer = 0;

  for (let student of students) {
    if (student > max) {
      answer++;
      max = student;
    }
  }

  return answer;
}

//5
console.log(solution(8, [130, 135, 148, 140, 145, 150, 150, 153]));
