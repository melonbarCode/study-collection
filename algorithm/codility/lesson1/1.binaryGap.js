
/**
 * 
 * BinaryGap
 * 
 */
function solution(N = 0) {
    // write your code in JavaScript (Node.js 8.9.4)
    const binary = N.toString(2);
    const binaryLength = binary.length;
    const pointer = [];
    let max = 0;

    for (let i = 0; i < binaryLength; i++) {
        if (binary[i] === "1") {
            pointer.push(i);
        }
    }

    for (let i = 1; i < pointer.length; i++) {

        max = Math.max(pointer[i] - pointer[i - 1] - 1, max)

    }

    return max;
}
