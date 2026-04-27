class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = new Array();
        for (let i=0; i<s.length; i++) {
            const curr = s[i];
            const top = stack.at(-1) || undefined;
            if (curr === '{' || curr === '[' || curr === '(') {
                stack.push(curr);
            } else if (curr == '}' && top === '{') {
                stack.pop();
            } else if (curr == ']' && top === '[') {
                stack.pop();
            } else if (curr == ')' && top === '(') {
                stack.pop();
            } else {
                return false;
            }
        }
        return !stack.length;
    }
}
