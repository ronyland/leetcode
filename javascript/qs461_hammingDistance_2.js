let test = require('leetcode_test').test
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    let count = 0;
    let z = x ^ y;
    while (z) {
        if (z & 1) {
            count++;
        }
        z = z >>> 1;
    }
    return count;
};

let cases = [               // [['', ''], ],
    [[1,4], 2],
]
test(hammingDistance, cases)
