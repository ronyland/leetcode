let test = require('leetcode_test').test
/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
    let len = A.length
    for(let k = 0; k < len; k++) {
        let i = 0, j = len - 1
        while(i < j) {
            A[k][i] = A[k][i] ^ A[k][j]
            A[k][j] = A[k][i] ^ A[k][j]
            A[k][i] = A[k][i] ^ A[k][j]
            A[k][i] ^= 1
            A[k][j] ^= 1
            i++
            j--
        }
        if (i === j)
            A[k][i] ^= 1
    }
    return A
};

let cases = [               // [['', ''], ],
    [[[[1,1,0],[1,0,1],[0,0,0]]], [[1,0,0],[0,1,0],[1,1,1]], false],
    [[[[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]]], [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]], false],
]
test(flipAndInvertImage, cases)
