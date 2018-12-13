let test = require('leetcode_test').test
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    nums = nums.sort((a, b) => a - b);
    const rs = [];
    let i = 0;
    while (i < nums.length) {
        let one = nums[i];
        let two = i + 1;                    //start from queue head
        let three = nums.length - 1;        //start from queue tail

        while (two < three) {
            let sum = one + nums[two] + nums[three];
            if (sum === 0) {
                rs.push([one, nums[two], nums[three]]);
                two++;
                three--;
                while (two < three && nums[two] === nums[two - 1]) {
                    two++;
                }
                while (two < three && nums[three] === nums[three + 1]) {
                    three--;
                }
            } else if (sum > 0) three--;
            else two++;
        }
        i++;
        while (i < nums.length && nums[i] === nums[i - 1]) i++;
    }
    return rs;
};

let cases = [               // [['',''],],
    [[[]],[]],
    [[[1,-1,-1,0]],[-1,0,1]],
    [[[-1,0,1,0]],[[-1,0,1]]],
    [[[0,0,0,0]],[0,0,0]],
    [[[-1,2,-1]],[-1,-1,2]],
    [[[0,0,0]],[0,0,0]],
    [[[-1,0,1,2,-1,-4]],[[-1,-1,2],[-1,0,1]]],
    [[[-1,0,1,2,-1,-4]],[[-1,0,1],[-1,-1,2]]],
    [[[-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6]],[[-4,-2,6],[-4,0,4],[-4,1,3],[-4,2,2],[-2,-2,4],[-2,0,2]]],
    [[[-4,-2,1,-5,-4,-4,4,-2,0,4,0,-2,3,1,-5,0]],[[-5,1,4],[-4,0,4],[-4,1,3],[-2,-2,4],[-2,1,1],[0,0,0]]],
]
test(threeSum,cases)
