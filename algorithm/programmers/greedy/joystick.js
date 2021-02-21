/**
 * https://programmers.co.kr/learn/courses/30/lessons/42860
 * @param {*} name
 */
// function solution(name) {
//   let initName = "A" + name;
//   let answer = 0;
//   let alpaObj = {};
//   for (let i = 65; i < 91; i++) {
//     alpaObj[String.fromCharCode(i)] = i;
//   }
//   let index = 0;

//   while (true) {
//     let nowCh = initName[index];
//     let nextCh = initName[index + 1];
//     let nowChNum = alpaObj[nowCh];
//     let nextChNum = alpaObj[nextCh];
//     let startNum = alpaObj["A"];
//     let endNum = alpaObj["Z"];

//     if (!nextCh) return answer;

//     let one = Math.abs(startNum - nextChNum) + (startNum === nowChNum ? 0 : index);
//     let two = Math.abs(endNum - nextChNum) + (endNum === nowChNum ? 0 : index + 1);
//     let three = Math.abs(nowChNum - nextChNum);
//     let minCount = Math.min(one, two, three);
//     console.log(one, two, three);

//     answer += minCount;
//     index++;
//   }
// }

function solution(name) {
  const arr = [0];

  const answer = [...name].reduce((answer, s, i) => {
    console.log(answer);
    if (s === "A") {
      if (name[i - 1] != "A")
        arr.push(continueouse(name.substring(i)) - (i - 1));
      return answer + 1;
    }

    return answer + asci(name, i) + 1;
  }, 0);

  return answer - Math.max(...arr) - 1;
}

function continueouse(name) {
  let repeat = 0;
  for (let i = 0; i < name.length; i++) {
    if (name[i] != "A") break;
    repeat++;
  }
  return repeat;
}

function asci(name = "", i) {
  const num = name.charCodeAt(i);
  return num > 78 ? 91 - num : num - 65;
}

console.log(solution("JAZ"));
