/**
*
조합의 경우수(메모이제이션)
      
 로 계산합니다. 하지만 여러분은 이 공식을 쓰지않고 다음 공식을 사용하여
재귀를 이용해 조합수를 구해주는 프로그램을 작성하세요.
          
▣ 입력설명
첫째 줄에 자연수 n(3<=n<=33)과 r(0<=r<=n)이 입력됩니다.
▣ 출력설명
첫째 줄에 조합수를 출력합니다.
▣ 입력예제 1
5 3

▣ 출력예제 1
10
▣ 입력예제 2
33 19
▣ 출력예제 2
818809200

 */

//나의 문제풀이
function solution(n = 0, r = 0) {
  let answer;

  function fac(f = 0) {
    if (f === 1) {
      return 1;
    }

    return f * fac(f - 1);
  }

  answer = fac(n) / (fac(n - r) * fac(r));

  return answer;
}

//다른 문제풀이
function solution2(n = 0, r = 0) {
  let answer = [];
  let dy = Array.from({ length: 35 }, () => Array(35).fill(0));

  function dfs(n, r) {
    if (dy[n][r] > 0) return dy[n][r];
    if (n === r || r === 0) return 1;
    else return (dy[n][r] = dfs(n - 1, r - 1) + dfs(n - 1, r));
  }

  answer = dfs(n, r);

  return answer;
}

//YES
console.log(solution(4, 3));
console.log(solution(5, 3));
console.log(solution(33, 19));
console.log(solution2(4, 3));
console.log(solution2(5, 3));
console.log(solution2(33, 19));
