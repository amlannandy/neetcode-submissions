class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const data = {};
        for (let i=0; i<nums.length; i++) {
            const curr = nums[i];
            if ((target-curr) in data) {
                return [data[target-curr], i];
            }
            data[curr] = i;
        }
        return [-1, -1]
    }
}
