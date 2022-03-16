/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    // loop through nums1 and remove zeros
    for (let i = 0; i < nums1.length; i += 1) {
        if (i > m - 1) {
           nums1.splice(i, 1);
            i -= 1;
        }
    }
    
    // iterate through nums2
    for (let i = 0; i < nums2.length; i += 1) {
         // push each element to nums1
        if (i <= n) nums1.push(nums2[i])
    }
       
    // sort nums1 in ascending order
    nums1.sort((a,b) => a - b)

};