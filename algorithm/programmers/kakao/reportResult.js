/**
 * https://programmers.co.kr/learn/courses/30/lessons/92334?language=javascript
 * @param {*} id_list
 * @param {*} report
 * @param {*} k
 * @returns
 */
function solution(id_list, report, k) {
  const answer = [];
  const reportedByObj = {};
  const reportCountObj = {};
  const blockers = [];

  id_list.forEach((id) => {
    reportedByObj[id] = new Set();
    reportCountObj[id] = 0;
  });

  report.forEach((r) => {
    const [reporter, target] = r.split(" ");

    if (!reportedByObj[reporter].has(target)) {
      reportedByObj[reporter].add(target);
      reportCountObj[target]++;
    }
  });

  for (let id of Object.keys(reportCountObj)) {
    if (reportCountObj[id] >= k) {
      blockers.push(id);
    }
  }

  id_list.forEach((id) => {
    let count = 0;
    for (let b of blockers) {
      if (reportedByObj[id].has(b)) {
        count++;
      }
    }

    answer.push(count);
  });

  return answer;
}

//다른 문제풀이 방법
function solution2(id_list, report, k) {
  let reports = [...new Set(report)].map((r) => r.split(" "));
  let badPersonMap = new Map();
  let goodPersonMap = new Map();

  for (let [_, badPerson] of reports) {
    badPersonMap.set(badPerson, badPersonMap.get(badPerson) + 1 || 1);
  }

  for (let [goodPerson, badPerson] of reports) {
    if (badPersonMap.get(badPerson) >= k) {
      goodPersonMap.set(goodPerson, goodPersonMap.get(goodPerson) + 1 || 1);
    }
  }

  console.log(badPersonMap, goodPersonMap);

  let answer = id_list.map((id) => goodPersonMap.get(id) || 0);

  return answer;
}

console.log(
  solution(
    ["muzi", "frodo", "apeach", "neo"],
    ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"],
    2
  )
);
console.log(
  solution2(
    ["muzi", "frodo", "apeach", "neo"],
    ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"],
    2
  )
);
