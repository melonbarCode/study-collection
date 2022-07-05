// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    const aLength = A.length;

    A.sort((a, b) => b - a);


    // let twoValue = Math.max(A[0] * A[1], A[aLenght - 1] * A[aLenght - 2]);

    if(A[0] < 0){
        return A[0] * A[1] * A[2];
    }


    if (A[0] * A[1] * A[2] > A[aLength - 1] * A[aLength - 2] * A[0]){

        return A[0] * A[1] * A[2];

    }else{

        return A[aLength - 1] * A[aLength - 2] * A[0];

    }

}
