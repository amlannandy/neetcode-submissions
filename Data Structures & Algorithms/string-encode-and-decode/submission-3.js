class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encodedString = '';
        strs.forEach(str => {
            const n = str.length;
            const encodedPiece = `${n}#${str}`;
            encodedString += encodedPiece;
        })
        return encodedString;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const decodedData = [];
        let n = 0;
        const encodedDataSize = str.length;
        while (n < encodedDataSize) {
            let size = 0;
            while (str[n] != '#') {
                size = size * 10 + parseInt(str[n]);
                n += 1;
            }
            n += 1;
            const word = str.slice(n, n+size);
            decodedData.push(word);
            n += size;
        }
        return decodedData;
    }
}
