let test = require('leetcode_test').test
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let max = 0, len = height.length - 1
    for (let i = 0, j = len; i < j;) {
        let minHeight = height[i] < height[j] ? height[i++] : height[j--];
        max = Math.max(max, (j - i + 1) * minHeight);
    }
    return max;
};

let cases = [               // [['', ''], ],
    [[[1,8,6,2,5,4,8,3,7]], 49],
]
test(maxArea, cases)
