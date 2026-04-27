class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freqMap = new Map();
        for (let i=0; i<nums.length; i++) {
            freqMap.set(nums[i], (freqMap.get(nums[i]) || 0) + 1);
        }
        const freqArr = new Array(nums.length).fill(0).map(() => []);
        freqMap.forEach((value, key) => {
            freqArr[value-1].push(key);
        });
        
        const res = [];
        for (let i=freqArr.length - 1; i>=0; i--) {
            res.push(...freqArr[i]);
        }
        return res.slice(0, k);
    }
}
