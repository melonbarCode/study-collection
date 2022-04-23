/**
* 
    회문 문자열
    앞에서 읽을 때나 뒤에서 읽을 때나 같은 문자열을 회문 문자열이라고 합니다.
    문자열이 입력되면 해당 문자열이 회문 문자열이면 "YES", 회문 문자열이 아니면 “NO"를 출력
    하는 프로그램을 작성하세요.
    단 회문을 검사할 때 대소문자를 구분하지 않습니다.
    ▣ 입력설명
    첫 줄에 정수 길이 100을 넘지 않는 공백이 없는 문자열이 주어집니다.
    ▣ 출력설명
    첫 번째 줄에 회문 문자열인지의 결과를 YES 또는 NO로 출력합니다.

    ▣ 입력예제 1
    gooG
    ▣ 출력예제 1
    YES
 */

//나의 문제풀이
function solution(text = "") {
  let answer = "NO";
  const tempText = text.toLocaleLowerCase();

  if (text.length % 2 === 1) {
    const centerIdx = Math.floor(text.length / 2);

    if (
      tempText.substring(0, centerIdx) ===
      tempText
        .substring(centerIdx + 1)
        .split("")
        .reverse()
        .join("")
    ) {
      answer = "YES";
    }
  } else {
    if (
      tempText.substring(0, tempText.length / 2) ===
      tempText
        .substring(tempText.length / 2)
        .split("")
        .reverse()
        .join("")
    ) {
      answer = "YES";
    }
  }

  return answer;
}

//다른 문제풀이
function solution2(text = "") {
  let answer = "YES";
  const tempText = text.toLocaleLowerCase();
  const leng = tempText.length;

  for (let i = 0; i < Math.floor(leng / 2); i++) {
    if (tempText[i] !== tempText[leng - 1 - i]) {
      answer = "NO";
      break;
    }
  }

  return answer;
}

//YES
console.log(solution("gooG"));
console.log(solution2("go3oG"));
