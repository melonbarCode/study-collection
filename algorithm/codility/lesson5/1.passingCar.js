// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A = [0]) {
    // write your code in JavaScript (Node.js 8.9.4)
    const aLength = A.length;
    let answer = 0;
    let zeroSum = 0;


    for(let i = 0; i < aLength; i++){

        if(A[i] === 0){
            zeroSum++;
            continue;
        }

        answer += zeroSum;  

    }
    
    return answer;
}
