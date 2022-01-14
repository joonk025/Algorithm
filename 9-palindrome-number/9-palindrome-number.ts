function isPalindrome(x: number): boolean {
    const xString = x.toString();
    const xArray = xString.split('');
    
    const compareFirstAndLast = (arr: string[] = xArray): boolean => {
        if (arr.length <= 1) { return true }
        
        if (arr[0] === arr[arr.length - 1]) {
            const newArr = arr.slice(1,-1);
            return compareFirstAndLast(newArr)
        } else {
            return false;
        }
    }
    return compareFirstAndLast(xArray);
};