class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const results = new Array(nums.length).fill(1);
        let prefix = nums[0];
        for (let i=1; i<nums.length; i++) {
            results[i] = prefix;
            prefix *= nums[i];
        }
        
        let postfix = 1;
        for (let i = nums.length-1; i>=0; i--) {
            results[i] *= postfix;
            postfix *= nums[i];
        }

        return results;
    }
}
