class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const freqS = {};
        const freqT = {};

        for (let i=0; i<s.length; i++) {
            if (s[i] in freqS) {
                freqS[s[i]] += 1;
            } else {
                freqS[s[i]] = 1;
            }
        }

        for (let i=0; i<t.length; i++) {
            if (t[i] in freqT) {
                freqT[t[i]] += 1;
            } else {
                freqT[t[i]] = 1;
            }
        }

        for (let i=0; i<s.length; i++) {
            if (freqS[s[i]] !== freqT[s[i]]) {
                return false;
            }
        }

        for (let i=0; i<t.length; i++) {
            if (freqS[t[i]] !== freqT[t[i]]) {
                return false;
            }
        }

        return true;
    }
}
