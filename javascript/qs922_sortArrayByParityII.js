let test = require('leetcode_test').test
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function(A) {
    let len = A.length
    let i = 0, j = len - 1
    while(i < len || j >= 0) {
        while(A[i] % 2 === 0) i+=2
        while(A[j] % 2 === 1) j-=2
        if (i < len && j >= 0) {
            A[i] = A[i] ^ A[j]
            A[j] = A[i] ^ A[j]
            A[i] = A[i] ^ A[j]
        }
        i+=2
        j-=2
    }
    return A
};

let cases = [               // [['', ''], ],
    [[[4,2,5,7]], [2,4,1,3],false],
]
test(sortArrayByParityII, cases)
