function lengthOfLongestSubstring(s: string): number {
    let longestStr = '';
    let maxLength = 0;

    for (let i = 0; i < s.length; i += 1) {
//         if (longestStr.split('').includes(s[i])) {
//             longestStr = longestStr.slice(longestStr.split('').indexOf(s[i]) + 1);
//         }
//          longestStr += s[i];
        
//         if (longestStr.length > maxLength) {maxLength = longestStr.length} 
 
        longestStr += s[i];
        if(longestStr.indexOf(s[i]) !== longestStr.length - 1) {
            longestStr = longestStr.slice(longestStr.indexOf(s[i]) + 1)
        }
        
        if (longestStr.length > maxLength) {maxLength = longestStr.length} 
        console.log(maxLength, longestStr)
        
    }
    return maxLength;
};