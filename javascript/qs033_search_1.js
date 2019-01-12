let test = require('leetcode_test').test
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let bg = 0, ed = nums.length
    while (ed > bg) {
        let index = bg + Math.floor((ed - bg) / 2)
        if (nums[index] === target) return index
        if (nums[bg] > nums[index]) {    //不符合升序，说明拐点在左侧
            if(nums[index]<target && target <= nums[ed - 1]) {    //右侧是升序，故判断在右侧进行
                bg = index + 1
            } else {
                ed = index
            }
        } else {        //拐点在右侧，左侧为升序
            if (target < nums[index] && target >= nums[bg]) {
                ed = index
            } else {
                bg = index + 1
            }
        }
        if (ed - bg === 1 && nums[bg] !== target)
            return -1
    }
    return -1
};

let cases = [               // [['', ''], ],
[[[],5],-1],
[[[4,5,6,7,0,1,2],3], -1],
[[[4,5,6,7,8,9,0,1,2],0], 6],
]
test(search, cases)
