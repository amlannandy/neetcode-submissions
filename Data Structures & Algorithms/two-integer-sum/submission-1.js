class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const occurenceMap = new Map();
        for (let i=0; i<nums.length; i++) {
            const difference = target - nums[i];
            if (occurenceMap.has(difference)) {
                return [occurenceMap.get(difference), i];
            }
            occurenceMap.set(nums[i], i);
        }
    }
}
