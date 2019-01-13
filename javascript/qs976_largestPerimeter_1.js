let test = require('leetcode_test').test
/**
 * @param {number[]} A
 * @return {number}
 */
var largestPerimeter = function(A) {
    A = A.sort((a, b) => a - b)
    for (let i = A.length - 1; i >= 0; i--) {
        if (A[i-2] + A[i-1] > A[i]) {
            return A[i] + A[i-1] + A[i-2]
        }
    }
    return 0
};

let cases = [               // [['', ''], ],
    [[[3,2,3,4]], 10],
    [[[1,2,1]], 0],
    [[[2,1,2]], 5],
    [[[3,6,2,3]], 8],
]
test(largestPerimeter, cases)
