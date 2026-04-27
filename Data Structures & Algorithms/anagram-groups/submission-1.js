class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const result = {};
        for (let str of strs) {
            const arr = new Array(26).fill(0);
            for (let i=0; i<str.length; i++) {
                const index = str[i].charCodeAt(0) - "a".charCodeAt(0);
                arr[index] += 1;
            }
            const key = arr.join('.');
            if (key in result) {
                result[key].push(str);
            } else {
                result[key] = [str];
            }
        }
        return Object.values(result);
    }
}
