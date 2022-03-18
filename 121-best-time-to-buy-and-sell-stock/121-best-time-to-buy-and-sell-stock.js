/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let min = prices[0];
    
    return prices.reduce((maxDiff, price, i) => {
        if (!i) {return maxDiff;}
        
        if (price < min) {
            min = price;
        }
        
        if (price - min > maxDiff) {
           return price - min;
        }
        return maxDiff;
    }, 0)
};