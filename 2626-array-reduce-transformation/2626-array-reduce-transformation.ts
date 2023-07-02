type Fn = (accum: number, curr: number) => number

function reduce(nums: number[], fn: Fn, init: number): number {
    if (nums === []) return init;

    let acc: number = init;
    let index: number = 0;
    
    while (index < nums.length) {
        acc = fn(acc, nums[index]);
        index += 1;
    }
    return acc;

};