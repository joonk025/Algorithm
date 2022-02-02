// Approach: compare sum of all previous elements + current element vs current element 
function maxSubArray(nums: number[]): number {
    let max = nums[0];
    let sum = nums[0];
    
    for (let i = 1; i < nums.length; i += 1) {
        sum = Math.max(sum + nums[i], nums[i]);
        if (sum > max) {
            max = sum;
        }
    }
    return max;
};