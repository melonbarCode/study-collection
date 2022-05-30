// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let aLength = A.length;

    if(aLength === 0){
        return 1;
    }

    let sum = (aLength + 2) * ( aLength + 1 ) / 2;
    let missingSum = A.reduce((a,c)=> a+c, 0)

    return sum - missingSum;
}
