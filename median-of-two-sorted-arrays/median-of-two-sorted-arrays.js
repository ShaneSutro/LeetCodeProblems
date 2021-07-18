/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const combined = combineArrays(nums1, nums2);
    let final = 0;
    if (combined.length % 2 === 0) {
        let num1 = combined[combined.length / 2 - 1];
        let num2 = combined[combined.length / 2];
        final = (num1 + num2) / 2
    } else {
        final = combined[Math.floor(combined.length / 2)]
    }
    return final;
};

var combineArrays = (arr1, arr2) => {
    const combinedArray = []
    let arr1Pointer = 0;
    let arr2Pointer = 0;
    
    while (arr1Pointer < arr1.length || arr2Pointer < arr2.length) {
        if (arr2[arr2Pointer] === undefined || arr1[arr1Pointer] !== undefined && arr1[arr1Pointer] <= arr2[arr2Pointer]) {
            combinedArray.push(arr1[arr1Pointer]);
            arr1Pointer++;
        } else if (arr1[arr1Pointer] === undefined || arr2[arr2Pointer] !== undefined && arr2[arr2Pointer] <= arr1[arr1Pointer]) {
            combinedArray.push(arr2[arr2Pointer]);
            arr2Pointer++;
        }
    }
    return combinedArray;
}