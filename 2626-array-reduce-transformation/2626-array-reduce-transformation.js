/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    // edge case: if nums has 0 length, return init
    if (nums.length === 0) return init;
    
    // logic
        // track accumulator start with init
    let acc = init;
    let count = 0;
        // track for which element in nums 
        while (count < nums.length) {
             // update accumulator by passing in the element in nums into fn
            acc = fn(acc, nums[count]);
            count += 1;
            
        }
        return acc;
};