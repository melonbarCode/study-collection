function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let obj = {};

    for (let a of A) {
        obj[a] ? obj[a]++ : obj[a] = 1
    }

    for (let key of Object.keys(obj)) {
        if (obj[key] % 2 === 1) {
            return Number(key);
        }
    }


}
