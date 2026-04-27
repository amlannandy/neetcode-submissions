function isNumber(value) {
  return !isNaN(Number(value));
}

class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encodedStr = '';
        strs.forEach(str => {
            const encoded = `${str.length}#${str}`;
            encodedStr += encoded;
        })
        return encodedStr;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let decodedStrs = [];
        let i = 0;
        while (i < str.length) {
            let size = 0;
            while (str[i] !== '#') {
                size = size * 10 + parseInt(str[i]);
                i++;
            }
            i += 1;
            const word = str.slice(i, i+size);
            decodedStrs.push(word);
            i += size;
        }
        return decodedStrs;
    }
}
