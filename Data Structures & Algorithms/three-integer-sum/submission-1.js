class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a, b) => a - b);
        const results = [];
        for (let i=0; i<nums.length; i++) {
            if (i > 0 && nums[i] === nums[i-1]) {
                continue;
            }
            const curr = nums[i];
            let beg = i + 1, end = nums.length - 1;
            while (beg < end) {
                const sum = curr + nums[beg] + nums[end];
                if (sum === 0) {
                    results.push([nums[i], nums[beg], nums[end]]);
                    beg += 1;
                    end -= 1;
                    while (beg < end && nums[beg] === nums[beg-1]) {
                        beg += 1;
                    }
                } else if (sum > 0) {
                    end -= 1;
                } else {
                    beg += 1;
                }
            }
        }
        return results;
    }
}
