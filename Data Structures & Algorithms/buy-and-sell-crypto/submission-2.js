class Solution {
    /**
     * @param {number} prices
     * @return {number}
     */
    maxProfit(prices) {
        const n = prices.length;
        let left = 0, right = 1;
        let maxProfit = 0;
        while (right < n) {
            if (prices[left] < prices[right]) {
                maxProfit = Math.max(maxProfit, prices[right] - prices[left]);
            } else {
                left = right;
            }
            right += 1;
        }
        return maxProfit;
    }
}
