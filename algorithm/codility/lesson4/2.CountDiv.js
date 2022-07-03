// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, B, K) {
    // write your code in JavaScript (Node.js 8.9.4)

    let answer = parseInt(B / K) - parseInt(A / K);

    if (A % K === 0) {
        return answer + 1;
    }

    return answer;
}