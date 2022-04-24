/**
*
모든 아나그램 찾기(해쉬, 투포인터, 슬라이딩 윈도우)
S문자열에서 T문자열과 아나그램이 되는 S의 부분문자열의 개수를 구하는 프로그램을 작성하
세요. 아나그램 판별시 대소문자가 구분됩니다. 부분문자열은 연속된 문자열이어야 합니다.
▣ 입력설명
첫 줄에 첫 번째 S문자열이 입력되고, 두 번째 줄에 T문자열이 입력됩니다.
S문자열의 길이는 10,000을 넘지 않으며, T문자열은 S문자열보다 길이가 작거나 같습니다.
▣ 출력설명
S단어에 T문자열과 아나그램이 되는 부분문자열의 개수를 출력합니다.

▣ 입력예제 1
bacaAacba
abc

▣ 출력예제 1
3

출력설명: {bac}, {acb}, {cba} 3개의 부분문자열이 "abc"문자열과 아나그램입니다

 */

//나의 문제풀이
function solution(textOne = "", textTwo = "") {
  let answer = 0;

  for (let i = 0; i < textOne.length - textTwo.length + 1; i++) {
    const obj = {};
    const slider = textOne.substring(i, textTwo.length + i);
    let isAnagram = true;

    for (let cha of slider) {
      obj[cha] ? obj[cha]++ : (obj[cha] = 1);
    }

    for (let cha of textTwo) {
      if (!obj[cha]) {
        isAnagram = false;
        break;
      } else {
        obj[cha]--;
      }
    }

    if (isAnagram) {
      console.log(slider);
      answer++;
    }
  }

  return answer;
}

function solution2(textOne = "", textTwo = "") {
  let answer = 0;

  let oneObj = {};
  let twoObj = {};
  let lt = 0;

  for (let t of textTwo) {
    twoObj[t] ? twoObj[t]++ : (twoObj[t] = 1);
  }

  for (let t = 0; t < textTwo.length - 1; t++) {
    oneObj[t] ? oneObj[textTwo[t]]++ : (oneObj[textTwo[t]] = 1);
  }

  for (let i = textTwo.length - 1; i < textOne.length; i++) {
    let isAnagram = true;
    oneObj[textOne[i]] ? oneObj[textOne[i]]++ : (oneObj[textOne[i]] = 1);
    console.log(oneObj);

    for (let [key, value] of Object.entries(oneObj)) {
      if (twoObj[key] !== value) {
        isAnagram = false;
        break;
      }
    }

    if (isAnagram) {
      answer++;
    }

    oneObj[textOne[lt]]--;

    if (oneObj[textOne[lt]] === 0) {
      delete oneObj[textOne[lt]];
    }

    lt++;
  }

  return answer;
}

//YES
console.log(solution("bacaAacba", "abc"));
console.log(solution2("bacaAacba", "abc"));
