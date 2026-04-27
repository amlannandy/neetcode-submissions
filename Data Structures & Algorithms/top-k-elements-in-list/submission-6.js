class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freqArray = new Array(nums.length+1).fill(null);
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
        
        const results = [];
        for (let i=freqArray.length-1; i>=0; i--) {
            if (freqArray[i]) {
                const remaining = k - results.length;
                results.push(...freqArray[i].slice(0, remaining));
            }
            if (results.length === k) {
                break;
            }
        }

        return results;
    }
}
