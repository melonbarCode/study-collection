
function solution(S) {
    // write your code in JavaScript (Node.js 8.9.4)

    let arr = [];

    for (let s of S) {
        switch (s) {
            case "(":
                arr.push("(");
                break;
            case "[":
                arr.push("[");
                break;
            case "{":
                arr.push("{");
                break;
            case "}":
                if (arr.length === 0) return 0;

                if (arr[arr.length - 1] === "{") {
                    arr.pop();
                    break;
                }

                return 0;
            case "]":
                if (arr.length === 0) return 0;

                if (arr[arr.length - 1] === "[") {
                    arr.pop();
                    break;
                }

                return 0;
            case ")":
                if (arr.length === 0) return 0;

                if (arr[arr.length - 1] === "(") {
                    arr.pop();
                    break;
                }

                return 0;
        }
    }

    if (arr.length > 0) {
        return 0;
    }

    return 1;
}