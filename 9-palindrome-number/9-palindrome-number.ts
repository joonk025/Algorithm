function isPalindrome(x: number): boolean {
    // convert x to a string
    const xString = x.toString();
    
    // split the string into an array
    const xArray = xString.split('');
    
    // compare the first and last number using recursion
    const compareFirstAndLast = (arr: string[] = xArray): boolean => {
        // base case: if the length of array is less or equal to 1, return true
        if (arr.length <= 1) { return true }
        
        // if first and last elements are the same, remove them and recurse
        if (arr[0] === arr[arr.length - 1]) {
            const newArr = arr.slice(1,-1);
            return compareFirstAndLast(newArr)
        } else {
            return false;
        }
    }
    
    return compareFirstAndLast(xArray);
};