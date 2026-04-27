class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const occurences = {};
        for (let i=0; i<nums.length; i++) {
            if (nums[i] in occurences) {
                return true;
            }
            occurences[nums[i]] = true;
        }
        return false;
    }
}
