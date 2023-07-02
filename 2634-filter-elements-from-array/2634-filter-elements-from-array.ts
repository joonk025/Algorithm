function filter(arr: number[], fn: (n: number, i?: number) => number): number[] {
    let index: number = 0;

    arr.forEach((el, i) => {
        if (fn(el, i)) {
            arr[index] = arr[i];
            index += 1;
        }
    });

    arr.length = index;
    return arr;
}