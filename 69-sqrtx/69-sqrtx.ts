function mySqrt(x: number): number {
    let r = 0;
    while ((r * r <= x) && ((r+1) * (r+1) <= x)) {
        r += 1;
    }
    return r;
};