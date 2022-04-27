/**
*
괄호문자제거
입력된 문자열에서 소괄호 ( ) 사이에 존재하는 모든 문자를 제거하고 남은 문자만 출력하는
프로그램을 작성하세요.
▣ 입력설명
첫 줄에 문자열이 주어진다. 문자열의 길이는 100을 넘지 않는다.
▣ 출력설명
남은 문자만 출력한다.

▣ 입력예제 1
(A(BC)D)EF(G(H)(IJ)K)LM(N)
▣ 출력예제 1
EFLM

 */

//나의 문제풀이
function solution(text = "") {
  let answer = "";

  let curlStack = [];

  for (let t of text) {
    if ("(" === t) {
      curlStack.push(t);
      continue;
    }

    if (")" === t) {
      curlStack.pop();
      continue;
    }

    if (curlStack.length === 0) {
      answer += t;
    }
  }

  return answer;
}

//다른 문제풀이
function solution2(text = "") {
  let answer = [];

  for (let t of text) {
    if (")" === t) {
      while (answer.pop() !== "(");
    } else {
      answer.push(t);
    }
  }

  return answer.join("");
}

//YES
console.log(solution("(A(BC)D)EF(G(H)(IJ)K)LM(N)"));
console.log(solution2("(A(BC)D)EF(G(H)(IJ)K)LM(N)"));
