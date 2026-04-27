class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false;
        }

        const occurenceMapOfS = new Map();
        for (let i=0; i<s.length; i++) {
            const currentFrequency = occurenceMapOfS.get(s[i]) || 0;
            occurenceMapOfS.set(s[i], currentFrequency + 1);
        }

        const occurenceMapOfT = new Map();
        for (let i=0; i<t.length; i++) {
            const currentFrequency = occurenceMapOfT.get(t[i]) || 0;
            occurenceMapOfT.set(t[i], currentFrequency + 1);
        }

        for (let i=0; i<s.length; i++) {
            if (occurenceMapOfS.get(s[i]) !== occurenceMapOfT.get(s[i])) {
                return false;
            }
        }

        return true;
    }
}
