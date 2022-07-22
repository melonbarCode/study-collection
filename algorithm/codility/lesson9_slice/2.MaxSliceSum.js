function solution(A) {

    let max = 0;

    const sum = A.reduce((prevSum, currentNum) => {
        let nextSum = prevSum + currentNum;

        if (nextSum < 0) { return 0; }

        if (nextSum < max) { return nextSum; }

        return max = nextSum;
    }, 0);

    return max === 0 ? Math.max(...A) : max;

}
