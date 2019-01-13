let test = require('leetcode_test').test
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
    let len = A.length
    let i = 0, j = len - 1
    while(i < j) {
        while(A[i] % 2 === 0) i++
        while(A[j] % 2 === 1) j--
        if (i < j) {
            A[i] = A[i] ^ A[j]
            A[j] = A[i] ^ A[j]
            A[i] = A[i] ^ A[j]
        }
    }
    return A
};

let cases = [               // [['', ''], ],
    [[[3,1,2,4]], [2,4,1,3],false],
]
test(sortArrayByParity, cases)
