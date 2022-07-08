// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, B) {
    // write your code in JavaScript (Node.js 8.9.4)
  const aLength = A.length;
  const aliveArr = [];
  
  aliveArr.push(0);
  
  let i = 1;
  while(i < aLength){
      if(B[i] == 0 && B[aliveArr[aliveArr.length-1]] == 1){
          if(A[i] > A[aliveArr[aliveArr.length-1]]){
              aliveArr.pop();
          }
          else{
              i++;
          }
      }
      else{
          aliveArr.push(i);
          i++;
      }
  }
  
  return aliveArr.length;
}
