function lengthOfLongestSubstring(s: string): number {
    let longestStr = '';
    let maxLength = 0;
    const record = {};

    for (let i = 0; i < s.length; i += 1) {
        if (!longestStr.split('').includes(s[i])) {
            longestStr += s[i];
        } else {
            longestStr += s[i];
            longestStr = longestStr.slice(longestStr.split('').indexOf(s[i]) + 1);
        }
        
        if (longestStr.length > maxLength) {maxLength = longestStr.length} 
    }
    return maxLength;
};