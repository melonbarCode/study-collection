function solution(A) {
    const counter = {};
    const standard = A.length / 2;


    for (let i = 0; i < A.length; i++) {
        if (counter[A[i]]) {
            counter[A[i]].push(i);
        } else { counter[A[i]] = [i]; }


        if (counter[A[i]].length > standard) {
            return counter[A[i]][0];
        }
    }

    return -1;
}
