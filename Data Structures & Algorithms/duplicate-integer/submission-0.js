class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const occurenceMap = new Map();
        for (let i=0; i<nums.length; i++) {
            if (occurenceMap.has(nums[i])) {
                return true;
            }
            occurenceMap.set(nums[i], true);
        }
        return false;
    }
}
