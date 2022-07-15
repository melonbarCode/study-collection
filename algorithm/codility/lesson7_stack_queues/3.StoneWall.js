function solution(H) {
    const n = H.length;
    const stack = [];
    let answer = 0;

    for (let i = 0; i < n; i++) {
        while(stack.length > 0 && H[i] < stack[stack.length - 1]) {
            stack.pop();
        }
		
        if (stack.length === 0 || H[i] > stack[stack.length - 1]) {
            answer += 1;
            stack.push(H[i]);
        }
    }

    return answer;
}
