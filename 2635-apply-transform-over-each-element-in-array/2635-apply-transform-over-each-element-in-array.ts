function map(arr: number[], fn: (n: number, i: number) => number): number[] {
    const mappedArr: number[] = [];
    
    for (let i = 0; i < arr.length; i += 1) {
        mappedArr.push(fn(arr[i], i));
    }
    return mappedArr;
};