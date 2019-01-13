let test = require('leetcode_test').test
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    x = x.toString(2).split('')
    y = y.toString(2).split('')
    let xLen = x.length, yLen = y.length
    let len = xLen > yLen ? xLen : yLen
    let ans = 0
    for (let i = len - 1; i >= 0; i--) {
        let xVal = i - len + xLen >= 0 ?x[i - len + xLen] : '0'
        let yVal = i - len + yLen >= 0 ?y[i - len + yLen] : '0'
        if (xVal !== yVal)
            ans++
    }
    return ans
};

let cases = [               // [['', ''], ],
    [[1,4], 2],
]
test(hammingDistance, cases)
