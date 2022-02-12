function removeElement(nums: number[], val: number): number {
    let numberOfDeletes = 0

    for (let i = 0; i < nums.length; i++) {
        const number = nums[i]
        
        if (number === val) {
            numberOfDeletes += 1
            nums[i] = Infinity
        }
    }
    
    nums.sort((a, b) => a - b)
    
    return nums.length - numberOfDeletes
};