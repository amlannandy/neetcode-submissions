class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const n = nums.length;

        const prefix = new Array(n).fill(1);
        let curr = 1;
        for (let i=0; i<n; i++) {
            prefix[i] = curr;
            curr *= nums[i];
        }

        const postfix = new Array(n).fill(1);
        curr = 1;
        for (let i=n-1; i>=0; i--) {
            postfix[i] = curr;
            curr *= nums[i];
        }

        const results = new Array(n).fill(1);
        for (let i=0; i<n; i++) {
            results[i] = prefix[i] * postfix[i];
        }
        return results;
    }
}
