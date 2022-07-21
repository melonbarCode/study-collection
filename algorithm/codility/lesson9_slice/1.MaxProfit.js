// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let aLength = A.length;
    let start = 0;
    let end = 0;
    let max = 0;

    while(end < aLength) {
        const profit = A[end] - A[start];

        if (profit < 0) start = end;
        if (max < profit) max = profit;

        end++;
    }

    return max;
}
