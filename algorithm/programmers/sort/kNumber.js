/**
 * https://programmers.co.kr/learn/courses/30/lessons/42748
 */
function solution(array, commands) {
    return commands.map((command) => {
     const [startIndex, endIndex, pickIndex] = command;
     return array.slice(startIndex - 1, endIndex).sort((a, b) => a - b)[
       pickIndex - 1
     ];
   });
 }
 
 console.log(solution([1, 5, 2, 6, 3, 7, 4],[[2, 5, 3], [4, 4, 1], [1, 7, 3]]))