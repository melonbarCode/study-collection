/**
 * https://programmers.co.kr/learn/courses/30/lessons/17682
 */

function solution(dartResult) {
  const dartGameArr = dartResult.match(/[0-9]{1,2}[SDT]{1}[\*#]{0,1}/g);
  return dartGameArr
    .reduce((p, e, i) => {
      let [point, powNum, option] = e.match(/[0-9]{1,2}|[SDT]{1}|[\*#]{1}/g);
      point = +point;
      powNum = powNum === "S" ? 1 : powNum === "D" ? 2 : 3;
      option = option === "#" ? -1 : option === "*" ? 2 : 1;
      console.log(point, powNum, option, Math.pow(point, powNum) * option);

      
      if (option !== -1 && i) p[i - 1] *= option;
      p.push(Math.pow(point, powNum) * option);
      return p;
    }, [])
    .reduce((p, c) => p + c, 0);
}

console.log(solution("1T2D3D#"));




