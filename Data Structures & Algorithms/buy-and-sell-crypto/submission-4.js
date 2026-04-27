class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0;
        let minValueUntilNow = prices[0];
        for (let i=1; i<prices.length; i++) {
            const profit = prices[i] - minValueUntilNow;
            maxProfit = Math.max(maxProfit, profit);
            minValueUntilNow = Math.min(minValueUntilNow, prices[i]);
        }
        return maxProfit;
    }
}
