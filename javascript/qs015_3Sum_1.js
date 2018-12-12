let test = require('leetcode_test').test
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    nums = nums.sort((a, b) => a - b);
    const ret = [];
    let i = 0;
    while (i < nums.length) {
        let one = nums[i];
        let start = i + 1;              //第二个数从前面开始
        let end = nums.length - 1;      //第三个数从后面开始，可以避免处理第二，三数相等的情况

        while (start < end) {
            let sum = one + nums[start] + nums[end];
            if (sum === 0) {
                ret.push([one, nums[start], nums[end]]);
                start++;
                end--;
                while (start < end && nums[start] === nums[start - 1]) {
                    start++;
                }
                while (start < end && nums[end] === nums[end + 1]) {
                    end--;
                }
            } else if (sum > 0) end--;
            else start++;
        }
        i++;
        while (i < nums.length && nums[i] === nums[i - 1]) i++;
    }
    return ret;
};

let cases = [               // [['', ''], ],
    [[[-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6]], [[-4, -2, 6], [-4, 0, 4], [-4, 1, 3], [-4, 2, 2], [-2, -2, 4], [-2, 0, 2]]],
    [[[1, -1, -1, 0]], [-1, 0, 1]],
    [[[-4, -2, 1, -5, -4, -4, 4, -2, 0, 4, 0, -2, 3, 1, -5, 0]], [[-5, 1, 4], [-4, 0, 4], [-4, 1, 3], [-2, -2, 4], [-2, 1, 1], [0, 0, 0]]],
    [[[-1, 0, 1, 0]], [[-1, 0, 1]]],
    [[[-1, 0, 1, 2, -1, -4]], [[-1, -1, 2], [-1, 0, 1]]],
    [[[0, 0, 0, 0]], [0, 0, 0]],
    [[[-1, 2, -1]], [-1, -1, 2]],
    [[[0, 0, 0]], [0, 0, 0]],
    [[[]], []],
    [[[-1, 0, 1, 2, -1, -4]], [[-1, 0, 1], [-1, -1, 2]]],
]
test(threeSum, cases)
