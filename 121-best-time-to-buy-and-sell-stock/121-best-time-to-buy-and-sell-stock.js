/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let min = prices[0];
    let maxDiff = 0;
    
    for (let i = 0; i < prices.length; i += 1) {
        if (prices[i] < min) {
            min = prices[i];
            continue;
        }
        
        if (prices[i] - min > maxDiff) {
            maxDiff = prices[i] - min;
        }
    }
    
    return maxDiff;
};