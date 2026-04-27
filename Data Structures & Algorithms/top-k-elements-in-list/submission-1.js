class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freqArray = new Array(nums.length).fill(null);
        const freqMap = {};
        for (let i=0; i<nums.length; i++) {
            if (!freqMap[nums[i]]) {
                freqMap[nums[i]] = 0;
            }
            freqMap[nums[i]] += 1;
        }
        Object.keys(freqMap).forEach(key => {
            if (!freqArray[freqMap[key]]) {
                freqArray[freqMap[key]] = [];
            }
            freqArray[freqMap[key]].push(key);
        });
        
        const results = freqArray.flat().filter(item => Boolean(item));
        results.reverse();
        return results.slice(0, k);
    }
}
