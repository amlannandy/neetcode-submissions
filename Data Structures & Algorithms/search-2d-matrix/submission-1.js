class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const m = matrix.length;
        const n = matrix[0].length;

        // Find relevant row
        let rowIndex;
        let beg = 0, end = m - 1;
        while (beg <= end) {
            const mid = Math.floor((beg + end) / 2);
            console.log(mid);
            if (matrix[mid][0] <= target && matrix[mid][n-1] >= target) {
                rowIndex = mid;
                break;
            } else if (matrix[mid][0] > target) {
                end = mid - 1;
            } else {
                beg = mid + 1;
            }
        }

        if (rowIndex === undefined) {
            return false;
        }

        const arr = matrix[rowIndex];
        beg = 0, end = n - 1;
        while (beg <= end) {
            const mid = Math.floor((beg + end) / 2);
            if (arr[mid] === target) {
                return true;
            } else if (arr[mid] > target) {
                end = mid - 1;
            } else {
                beg = mid + 1;
            }
        }

        return false;
    }
}
