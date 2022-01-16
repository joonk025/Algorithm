function searchInsert(nums: number[], target: number): number {
    if (nums.includes(target)) {return nums.indexOf(target)};
    
    if (nums[nums.length - 1] < target) {return nums.length}
    
    for (let i = 0; i < nums.length; i += 1) {
       if (nums[i] > target) {
           return i
       }
    }
};