let test = require('leetcode_test').test
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums = nums.sort((a, b) => a - b)
    let rs = undefined
    let i = 0, sign = 1
    while (i < nums.length) {
        let one = nums[i];
        let two = i + 1;                    //start from queue head
        let three = nums.length - 1         //start from queue tail

        while (two < three) {
            let sum = one + nums[two] + nums[three] - target;
            if (sum === 0) {
                return target
            } else if (sum > 0) {
                three--
                while (two < three && nums[three] === nums[three + 1]) {
                    three--
                }
            } else {
                two++
                while (two < three && nums[two] === nums[two - 1]) {
                    two++
                }
            }
            if (!rs || Math.abs(sum) < rs) {
                if (sum < 0)
                    sign = -1
                else
                    sign = 1
                rs = Math.abs(sum)
            }
        } 
        i++
        while (i < nums.length && nums[i] === nums[i - 1]) i++;
    }
    return rs * sign + target
};

let cases = [               // [['', ''], ],
    [[[1,1,1,0], 100], 3],
    [[[-1,2,1,-8,3], -1], -3],
    [[[-1,2,1,-4,3], 1], 1],
    [[[-1,2,1,-4], 1], 2],
]
test(threeSumClosest, cases)
