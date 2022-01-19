function plusOne(digits: number[]): number[] {
    let flag = true;
    for (let i = digits.length - 1; i >= 0; i -= 1) {
        if (digits[i] === 9) {
            flag = true;
            digits[i] = 0;
        } else {
            digits[i] += 1;
            flag = false;
            break;
        }
    }
    
    if (flag) {digits.unshift(1)};
    return digits;
};