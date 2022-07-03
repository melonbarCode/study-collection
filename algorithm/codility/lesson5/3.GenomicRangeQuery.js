// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
// 3.GenomicRangeQuery

function solution(S = "", P, Q) {
    // write your code in JavaScript (Node.js 8.9.4)
    const answer = [];
    const pqLength = P.length;

    const matchMap = {
        A: 1,
        C: 2, 
        G: 3, 
        T: 4
    }

    const keys = Object.keys(matchMap);

    for(let i = 0; i < pqLength; i++){

        let min = Number.MAX_SAFE_INTEGER;
        let minIndex = Math.min(P[i], Q[i]);
        let maxIndex = Math.max(P[i], Q[i]);

        const arr = S.substring(minIndex, maxIndex + 1);

        for(let j = 0; j < keys.length; j++){

            const alpha = keys[j];

            if(arr.includes(alpha)){
                min = Math.min(min, matchMap[alpha])
            }

        }    


        answer.push(min);
    }

    return answer;
}
