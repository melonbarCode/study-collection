
/**
 * 가장큰수 
 * https://programmers.co.kr/learn/courses/30/lessons/42746
 * @param {*} numbers 
 */
function solution(numbers = []) {

    return numbers.map(n => String(n)).sort((a,b)=> (b+a) - (a+b)).join("")
    
}

// console.log(solution([6, 10, 2]))
console.log(solution([3, 30, 34, 5, 9]	))