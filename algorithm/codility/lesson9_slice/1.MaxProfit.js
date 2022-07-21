// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)

    let lidx = 0;
    let ridx = A.length - 1;
    let answer = 0;

    if(A.length < 2){
        return 0;
    }

    while(lidx !== ridx){

        if(A[ridx] > A[lidx]){
            answer = Math.max(A[ridx] - A[lidx], answer)
            ridx--;
        }else{
            lidx++;
        }
    }



    if(answer < 0){
        return 0;
    }

    return answer;

}
