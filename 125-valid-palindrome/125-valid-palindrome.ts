function isPalindrome(s: string): boolean {
    s = s.replace(/[^a-z0-9]/gi, '').toLowerCase();

    for (let i = 0; i < s.length; i += 1) {
        if (s[i] === s[s.length - i - 1]) {
            continue
        } else {
            return false;
        }
    }
    return true;
};