class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const occurences = {};

        for (let i=0; i<nums.length; i++) {
            const diff = target - nums[i];
            if (diff in occurences) {
                return [occurences[diff], i];
            }
            occurences[nums[i]]= i;
        }

        return [-1, -1];
    }
}
