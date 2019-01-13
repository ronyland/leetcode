let test = require('leetcode_test').test
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let i = 0
    while(i < nums.length) {
        if (nums[i] >= target)
            return i
        else 
            i++
    }
    return i
};

let cases = [               // [['', ''], ],
    [[[],1],0],
    [[[1,3,5,6],5], 2],
    [[[1,3,5,6],2], 1],
    [[[1,3,5,6],7], 4],
    [[[1,3,5,6],0], 0],
]
test(searchInsert, cases)
