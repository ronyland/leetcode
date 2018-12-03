/*
    题意：如果 数组长度为奇数，那么取两数组再次递增排序后的中间数，否则，取排序后中间两数的和除2。
*/

var findMedianSortedArrays = function (nums1, nums2) {
    let len1 = nums1.length
    let len2 = nums2.length
    let medium = Math.floor((len1 + len2) / 2)
    let l1 = 0, l2 = 0
    let val = []
    for (let i = 0; i <= medium; i++) {
        if (nums1[l1] > nums2[l2] || !nums1[l1]) {
            val.push(nums2[l2])
            l2++
        } else {
            val.push(nums1[l1])
            l1++
        }
    }
    if ((len1 + len2) % 2 === 1)
        return val[medium]
    else
        return (val[medium] + val[medium - 1]) / 2
};

console.log(findMedianSortedArrays([2,7,11,15,20], [3]))