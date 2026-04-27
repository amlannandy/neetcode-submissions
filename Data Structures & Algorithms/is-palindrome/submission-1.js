class Solution {
    isAlphaNumberic(char) {
        const code = char.charCodeAt(0);
        return (
            (code >= 48 && code <= 57) ||
            (code >= 65 && code <= 90) ||
            (code >= 97 && code <= 122)
        );
    }
    
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const t = [...s]
            .map(char => char.toLowerCase())
            .filter(char => this.isAlphaNumberic(char));
        let beg = 0, end = t.length - 1;
        while (beg < end) {
            if (t[beg] !== t[end]) {
                return false;
            }
            beg += 1;
            end -= 1;
        }
        return true;
    }
}
