/**
 *  https://programmers.co.kr/learn/courses/30/lessons/42576
 */
function solution(participant = [], completion = []) {
  const comList = completion.reduce(
    (obj, value) => (obj[value] ? obj[value]++ : (obj[value] = 1), obj),
    {}
  );

  const unComList = participant.find(
    (player) => {
      console.log(this.test);
      const count = comList[player] ? comList[player]-- : -1;
      return count === -1 ? true : false;
    },
    { test: 1 }
  );

  return unComList;
}

var solution = (_, $) =>
  _.find(
    (_) => !$[_]--,
    $.map((_) => {
      return ($[_] = ($[_] | 0) + 1);
    })
  );

console.log(
  solution(
    [
      "marina",
      "josipa",
      "nikola",
      "vinko",
      "filipa",
      "vinko",
      "vinko",
      "vinko",
      "vinko",
      "vinko",
      "vinko",
    ],
    [
      "josipa",
      "filipa",
      "marina",
      "nikola",
      "vinko",
      "vinko",
      "vinko",
      "vinko",
      "vinko",
      "vinko",
    ]
  )
);
