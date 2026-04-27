class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const result = {};
        const base = "a".charCodeAt(0);
        for (let str of strs) {
            const arr = new Array(26).fill(0);
            for (let i=0; i<str.length; i++) {
                const index = str[i].charCodeAt(0) - base;
                arr[index] += 1;
            }
            const key = arr.join('.');
            if (!result[key]) {
                result[key] = [];
            }
            result[key].push(str);
        }
        return Object.values(result);
    }
}
