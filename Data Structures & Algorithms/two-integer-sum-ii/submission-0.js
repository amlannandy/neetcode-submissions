class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        const freqMap = new Map();
        for (let i=0; i< numbers.length; i++) {
            const diff = target - numbers[i];
            if (freqMap.has(diff)) {
                return [freqMap.get(diff), i+1];
            }
            freqMap.set(numbers[i], i+1);
        }
        return [-1, -1]
    }
}
