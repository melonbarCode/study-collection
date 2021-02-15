
/**
 * 
 * https://programmers.co.kr/learn/courses/30/lessons/42747
 * H-Index
 * @param {*} citations 
 */
function solution(citations) {
    citations.sort((a,b)=> b-a);

    let hIndex = 0;

    while(hIndex + 1 <= citations[hIndex]){
        hIndex++;
    }

    return hIndex;
}

console.log(solution([3, 0, 6, 1, 5]))