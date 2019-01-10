let test = require('leetcode_test').test
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(nums.length === 0)
        return 0
    let k = 0
    for(let i = 1; i < nums.length; i++) {
        while(i < nums.length && nums[k] === nums[i]) i++
        if(i < nums.length) {
            nums[++k] = nums[i]
        }
    }
    return k + 1
};

let cases = [               // [['', ''], ],
    [[[1,1]], 1],
    [[[0,0,1,1,1,2,2,3,3,4]], 5],
]
test(removeDuplicates, cases)
