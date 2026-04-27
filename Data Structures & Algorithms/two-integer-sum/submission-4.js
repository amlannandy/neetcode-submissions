class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const occurences = {};
        for (let i=0; i<nums.length; i++) {
            occurences[nums[i]] = i;
        }
        for (let i=0; i<nums.length; i++) {
            const diff = target - nums[i];
            if (diff in occurences) {
                if (occurences[diff] !== i) {
                    return [occurences[diff], i];
                }
            }
        }
        return [-1, -1];
    }
}
