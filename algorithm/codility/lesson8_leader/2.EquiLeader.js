// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)

    let aLength = A.length;
    let rightLength = aLength;
    let rightMap = {};
    let leftLength = 0;
    let leftMap = {};
    let leader = 0;
    let counter = 0;
    let answer = 0;

    for(let i = 0; i < aLength; i++){
        rightMap[A[i]] ? rightMap[A[i]]++ : rightMap[A[i]] = 1;
    }    

    for(let i = 0; i < aLength; i++){

        rightLength--;
        rightMap[A[i]]--;
        leftLength++;
        leftMap[A[i]] ? leftMap[A[i]]++ : leftMap[A[i]] = 1;

        if(leftMap[A[i]] > parseInt(leftLength/2)  ){
            leader = A[i];
            counter =  leftMap[A[i]];
        }


        if(rightMap[leader] > parseInt(rightLength/2) && counter > parseInt(leftLength / 2)) answer++;
    }


    return answer;

}