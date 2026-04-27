class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        const size = heights.length;
        let maxArea = 0;
        let beg = 0, end = size - 1;
        while (beg < end) {
            const currentArea = Math.min(heights[beg], heights[end]) * (end - beg);
            maxArea = Math.max(maxArea, currentArea);
            if (heights[beg] < heights[end]) {
                beg += 1;
            } else {
                end -= 1;
            }
        }
        return maxArea;
    }
}
