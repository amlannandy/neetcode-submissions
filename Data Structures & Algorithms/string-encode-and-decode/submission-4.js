class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encodedString = '';
        for (let i=0; i<strs.length; i++) {
            const size = strs[i].length;
            encodedString += `${size}#${strs[i]}`;
        }
        return encodedString;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const res = [];
        let i = 0;
        while (i < str.length) {
            let size = 0;
            while (str[i] != '#') {
                size = size * 10 + parseInt(str[i]);
                i += 1;
            }
            i += 1;
            const word = str.slice(i, i+size);
            res.push(word);
            i += size;
        }
        return res;
    }
}
