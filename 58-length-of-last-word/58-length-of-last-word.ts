function lengthOfLastWord(s: string): number {
    let maxL = 0;
    
    if(s === " ") return 0;
    
    
    for (let i = s.length - 1; i >= 0; i -= 1) { 
        if (s[i] !== ' ') {
            maxL += 1;
        } else if (s[i] === ' ' && maxL !== 0) {
            return maxL;
        }
    }
    return maxL;
};