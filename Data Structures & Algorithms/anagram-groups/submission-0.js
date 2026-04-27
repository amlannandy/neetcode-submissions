class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const freqMap = new Map();
        for (let i=0; i<strs.length; i++) {
            const str = strs[i];
            const freqArray = new Array(26).fill(0);
            for (let j=0; j<str.length; j++) {
                const charCode = str.charCodeAt(j) - 97;
                freqArray[charCode] += 1;
            }
            const freqArrayString = freqArray.join(',');
            freqMap.set(freqArrayString, [
                ...(freqMap.get(freqArrayString) || []),
                str,
            ]);
        }

        const results = new Array();
        freqMap.forEach(entry => {
            results.push(entry);
        });
        return results;
    }
}
