function isPalindrome(s: string): boolean {
    s = s.replace(/[^a-z0-9]/gi, '').toLowerCase();

    if (s.length <= 1) {return true};
    
    if(s[0] === s[s.length - 1]) {
        const newS = s.slice(1, -1);
        return isPalindrome(newS)
    } else {
        return false;
    }
};