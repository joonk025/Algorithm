function longestCommonPrefix(strs: string[]): string {
    return strs.reduce((acc, val) => {
        let newAcc = '';
        const accArr = acc.split('');
        
        for (let i = 0; i < accArr.length; i += 1) {
            if (accArr[i] === val[i]) {
                newAcc += val[i];
            } else {
                break;
            }
        }
        return newAcc;
    }, strs[0])
};