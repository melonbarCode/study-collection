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