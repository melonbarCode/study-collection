// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
   // write your code in JavaScript (Node.js 8.9.4)

   let minPosition = 0;
   let minAverage = (A[0] + A[1]) / 2;

   for(let i = 2; i < A.length; i++){

       let average = (A[i-2]+A[i-1]+A[i]) / 3;

       if(minAverage > average){
           minPosition = i - 2;
           minAverage = average;
       }


       average = (A[i-1] + A[i]) / 2;

       if(minAverage > average){
           minAverage = average;
           minPosition = i - 1;
       }

   }

   return minPosition;
}
