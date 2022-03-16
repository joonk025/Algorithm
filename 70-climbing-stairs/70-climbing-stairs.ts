
function climbStairs(n: number, memo = {}): number {
    
    if (memo[n]) return memo[n]
    if (n === 1) return 1;
    if (n === 2) return 2;
    
    return memo[n] = climbStairs(n - 1, memo) + climbStairs(n - 2, memo)
};