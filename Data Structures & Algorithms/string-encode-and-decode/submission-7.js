class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = '';
        strs.forEach(str => {
            res += `${str.length}#${str}`;
        });
        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const res = [];
        let i = 0, size = 0;
        while (i < str.length) {
            while (str[i] != '#') {
                size = size * 10 + parseInt(str[i]);
                i += 1;
            }
            i += 1;
            const word = str.slice(i, i+size);
            res.push(word);
            i += size;
            size = 0;
        }
        return res;
    }
}

// 4#code5#fatty
