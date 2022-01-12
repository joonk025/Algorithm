function twoSum(nums: number[], target: number): number[] {
    const record: object | {} = {};
   
    for (let i = 0; i < nums.length; i += 1) {
        const value: number = target - nums[i];

        if (record[value] !== undefined) {
            return [record[value], i];
        } else {
            record[nums[i]] = i;
        }
    }
};
