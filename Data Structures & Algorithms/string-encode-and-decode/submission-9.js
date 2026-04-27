class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encodedStr = '';
        strs.forEach(str => {
            encodedStr += `${str.length}#${str}`;
        })
        return encodedStr;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let i = 0;
        const res = [];
        while (i < str.length) {
            let size = 0;
            while (str[i] !== '#') {
                size = size * 10 + parseInt(str[i]);
                i += 1;
            }
            i += 1;
            res.push(str.slice(i, i+size));
            i += size;
        }
        return res;
    }
}
