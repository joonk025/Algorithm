function lengthOfLastWord(s: string): number {
    const newS = s.trim().replace(/[^a-z]/gi, '@');
    return newS.length - newS.lastIndexOf('@') - 1;
}