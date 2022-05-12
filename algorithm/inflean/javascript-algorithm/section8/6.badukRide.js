/**
*
바둑이 승차(DFS)
철수는 그의 바둑이들을 데리고 시장에 가려고 한다. 그런데 그의 트럭은 C킬로그램 넘게 태
울수가 없다. 철수는 C를 넘지 않으면서 그의 바둑이들을 가장 무겁게 태우고 싶다.
N마리의 바둑이와 각 바둑이의 무게 W가 주어지면, 철수가 트럭에 태울 수 있는 가장 무거운
무게를 구하는 프로그램을 작성하세요.
▣ 입력설명
첫 번째 줄에 자연수 C(1<=C<=100,000,000)와 N(1<=N<=30)이 주어집니다.
둘째 줄부터 N마리 바둑이의 무게가 주어진다.
▣ 출력설명
첫 번째 줄에 가장 무거운 무게를 출력한다.

▣ 입력예제 1
259 5
81
58
42
33
61

▣ 출력예제 1
242

 */

//나의 문제풀이

function solution(max = 0, dogs = [0]) {
  let answer = 0;
  let flag = 0;
  let dogsLength = dogs.length;

  function dfs(v = 0, sum = 0) {
    if (v === dogsLength) {
      if (sum < max && answer < sum) {
        answer = sum;
      }

      return;
    } else {
      dfs(v + 1, sum + dogs[v]);
      dfs(v + 1, sum);
    }
  }

  dfs(0, 0);

  return answer;
}
//YES
console.log(solution(259, [81, 58, 42, 33, 61]));
