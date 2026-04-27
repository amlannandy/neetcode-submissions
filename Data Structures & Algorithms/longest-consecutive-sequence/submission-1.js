class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (!nums.length) {
            return 0;
        }
        const occurenceSet = new Set(nums);
        let result = 1;
        for (let num of nums) {
            if (!occurenceSet.has(num-1)) {
                let count = 1;
                while (occurenceSet.has(num+count)) {
                    count += 1;
                }
                result = Math.max(result, count);
            }
        }
        return result;
    }
}
