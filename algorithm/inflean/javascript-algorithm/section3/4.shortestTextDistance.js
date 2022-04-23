/**
* 
가장 짧은 문자거리
한 개의 문자열 s와 문자 t가 주어지면 문자열 s의 각 문자가 문자 t와 떨어진 최소거리를 출
력하는 프로그램을 작성하세요.
▣ 입력설명
첫 번째 줄에 문자열 s와 문자 t가 주어진다. 문자열과 문자는 소문자로만 주어집니다.
문자열의 길이는 100을 넘지 않는다.
▣ 출력설명
첫 번째 줄에 각 문자열 s의 각 문자가 문자 t와 떨어진 거리를 순서대로 출력한다.


▣ 입력예제 1
teachermode e
▣ 출력예제 1
1 0 1 2 1 0 1 2 2 1 0

 */

//나의 문제풀이
function solution(text = "", e) {
  const answer = [];
  let p = 0;

  for (let t of text) {
    if (t === e) {
      p = 0;
      answer.push(p);
    } else {
      p++;
      answer.push(p);
    }
  }

  for (let rt = text.length - 1; rt >= 0; rt--) {
    if (text[rt] === e) {
      p = 0;
    } else {
      p++;
      answer[rt] = Math.min(answer[rt], p);
    }
  }

  return answer;
}

//YES
console.log(solution("teachermode", "e"));
