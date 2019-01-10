let test = require('leetcode_test').test
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let k = 0
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] !== val) {
            nums[k++] = nums[i]
        } 
    }
    return k
};

let cases = [               // [['', ''], ],
    [[[],2], 0],
    [[[2,2],2], 0],
    [[[3,2,2,3],3], 2],
    [[[0,1,2,2,3,0,4,2],2], 5],
]
test(removeElement, cases)
