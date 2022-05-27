function solution(A, K) {
    // write your code in JavaScript (Node.js 8.9.4)

    const alength = A.length;
    const answer = Array.from({ length: alength }, ()=> 0);

    for (let i = 0; i < alength; i++) {
        answer[i + K >= alength ? (i + K) % alength : i + K] = A[i];
    }


    return answer;
}
