/**
*
후위식 연산(postfix)
후위연산식이 주어지면 연산한 결과를 출력하는 프로그램을 작성하세요.
만약 3*(5+2)-9 을 후위연산식으로 표현하면 352+*9- 로 표현되며 그 결과는 12입니다.
▣ 입력설명
첫 줄에 후위연산식이 주어집니다. 연산식의 길이는 50을 넘지 않습니다.
식은 1~9의 숫자와 +, -, *, / 연산자로만 이루어진다.
▣ 출력설명
연산한 결과를 출력합니다.

▣ 입력예제 1
352+*9-
▣ 출력예제 1
12
 */

//나의 문제풀이
function solution(text = "") {
  let numStack = [];

  for (let t of text) {
    if (t.match(/[0-9]/gi)) {
      numStack.push(Number(t));
      continue;
    }

    if (t === "+") {
      let back = numStack.pop();
      let front = numStack.pop();

      numStack.push(front + back);
    }

    if (t === "-") {
      let back = numStack.pop();
      let front = numStack.pop();

      numStack.push(front - back);
    }

    if (t === "/") {
      let back = numStack.pop();
      let front = numStack.pop();

      numStack.push(front / back);
    }

    if (t === "*") {
      let back = numStack.pop();
      let front = numStack.pop();

      numStack.push(front * back);
    }
  }

  return numStack[0];
}

//다른 문제풀이
function solution2(text = "") {
  let numStack = [];

  for (let t of text) {

    if (!isNaN(t)) {
      numStack.push(+t);
    } else {
      let rightNumber = numStack.pop();
      let leftNumber = numStack.pop();

      if (t === "*") numStack.push(leftNumber * rightNumber);
      else if (t === "+") numStack.push(leftNumber + rightNumber);
      else if (t === "/") numStack.push(leftNumber / rightNumber);
      else if (t === "-") numStack.push(leftNumber - rightNumber);
    }
  }

  return numStack[0];
}

//12
console.log(solution("352+*9-"));
console.log(solution2("352+*9-"));
