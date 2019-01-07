let test = require('leetcode_test').test
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    nums = nums.sort((a, b) => a - b);
    let rs = []
    for (let i = 0; i < nums.length - 3; i++) {
        let result = threeSum(nums.slice(i + 1), target - nums[i])
        result.map((al) => {return al.unshift(nums[i])})
        rs = rs.concat(result)
        while(nums[i] === nums[i + 1]) i++
    } 
    return rs   
};

var threeSum = function (nums, target) {
    const rs = [];
    let i = 0;
    while (i < nums.length) {
        let one = nums[i];
        let two = i + 1;                    //start from queue head
        let three = nums.length - 1;        //start from queue tail

        while (two < three) {
            let sum = one + nums[two] + nums[three];
            if (sum === target) {
                rs.push([one, nums[two], nums[three]]);
                two++;
                three--;
                while (two < three && nums[two] === nums[two - 1]) {
                    two++;
                }
                while (two < three && nums[three] === nums[three + 1]) {
                    three--;
                }
            } else if (sum > target) three--;
            else two++;
        }
        i++;
        while (i < nums.length && nums[i] === nums[i - 1]) i++;
    }
    return rs;
};

let cases = [               // [['', ''], ],
    [[[-1,-5,-5,-3,2,5,0,4],-7], [[-5,-5,-1,4],[-5,-3,-1,2]]],
    [[[0,0,0,0],0],[[0,0,0,0]]],
    [[[1, 0, -1, 0, -2, 2], 0], [
        [-1,  0, 0, 1],
        [-2, -1, 1, 2],
        [-2,  0, 0, 2]
      ]],
]
test(fourSum, cases)
