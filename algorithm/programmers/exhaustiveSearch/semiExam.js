function solution(answers) {
  const one = [1, 2, 3, 4, 5];
  const two = [2, 1, 2, 3, 2, 4, 2, 5];
  const three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  const corrects = [0, 0, 0];
  const passor = [];

  const answersLength = answers.length;

  for (let i = 0; i < answersLength; i++) {
    answers[i] === one[i % one.length] && corrects[0]++;
    answers[i] === two[i % two.length] && corrects[1]++;
    answers[i] === three[i % three.length] && corrects[2]++;
  }

  const max = Math.max(corrects[0], corrects[1], corrects[2]);

  corrects.forEach((point, i) => {
    if (max === point) passor.push(i + 1);
  });

  return passor;
}

console.log(solution([1, 2, 3, 4, 5]));
