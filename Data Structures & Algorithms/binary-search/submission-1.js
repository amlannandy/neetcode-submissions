class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let beg = 0, end = nums.length - 1;
        while (beg <= end) {
            const mid = Math.floor((beg + end)/2);
            if (nums[mid] === target) {
                return mid;
            } else if (nums[mid] > target) {
                end = mid - 1;
            } else {
                beg = mid + 1;
            }
        }
        return -1;
    }
}
