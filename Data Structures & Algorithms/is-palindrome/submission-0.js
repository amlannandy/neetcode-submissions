class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const str = new Array(...s).filter(char => (char >= 'a' && char <= 'z') || 
               (char >= 'A' && char <= 'Z') || 
               (char >= '0' && char <= '9')).map(char => char.toLowerCase()).join('');
        let beg = 0, end = str.length - 1;
        while (beg < end) {
            if (str[beg] !== str[end]) {
                return false;
            }
            beg += 1;
            end -= 1;
        }
        return true;
    }

}
