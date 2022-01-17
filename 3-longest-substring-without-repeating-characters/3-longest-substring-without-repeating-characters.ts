function lengthOfLongestSubstring(s: string): number {
    let longestStr = '';
    let maxLength = 0;

    for (let i = 0; i < s.length; i += 1) {
        if (longestStr.split('').includes(s[i])) {
            longestStr = longestStr.slice(longestStr.split('').indexOf(s[i]) + 1);
        }
         longestStr += s[i];
        
        if (longestStr.length > maxLength) {maxLength = longestStr.length} 
    }
    return maxLength;
};