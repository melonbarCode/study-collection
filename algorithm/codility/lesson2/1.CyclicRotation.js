// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, K) {
    // write your code in JavaScript (Node.js 8.9.4)

    const alength = A.length;
    const answer = Array.from({ length: alength }, ()=> 0);

    for (let i = 0; i < alength; i++) {
        console.log((i + K) % alength, i+K  , alength)
        answer[i] = A[i + K > alength ? (i + K) % alength : i + K];
        console.log(answer);
    }


    return answer;
}
