// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let answer = 0;
    A.sort((a, b)=> b-a);

    for(let i = 0; i < A.length - 2; i++){

        if(A[i] <= 0){
          return 0;
        }

        for(let j = i+1; j < A.length - 1; j++){

            if(A[i] < A[j] + A[j+1]){
                return 1; 
            }

        }

    }


    return answer;
}
