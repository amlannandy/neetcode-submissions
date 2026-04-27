class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];
        for (let i=0; i<tokens.length; i++) {
            const curr = tokens[i];
            if (this.isNumeric(curr)) {
                stack.push(parseInt(curr));
            } else {
                const a = stack.pop();
                const b = stack.pop();
                let res;
                switch(curr) {
                    case '+':
                        res = a + b;
                        break;
                    case '-':
                        res = b - a;
                        break;
                    case '/':
                        res = Math.trunc(b / a);
                        break;
                    case '*':
                        res = a * b;
                        break;
                }
                stack.push(res);
            }
        }
        return stack[0];
    }

    isNumeric(character) {
        return !isNaN(parseInt(character, 10));
    }
}
