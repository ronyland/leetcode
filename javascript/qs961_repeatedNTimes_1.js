let test = require('leetcode_test').test
/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function(A) {
    let map = {}, len = A.length
    for(let i = 0; i < len; i++) {
        if(!map[A[i]])
            map[A[i]] = 1
        else {
            //map[A[i]]++              //注意题目中的条件，只有一个元素重复，因此谁重复就是谁，注释这两行，可以击败100.00% 的用户
            //if(map[A[i]] === len / 2)
                return A[i]
        }
    }
};

let cases = [               // [['', ''], ],
    [[[1,2,3,3]], 3],
    [[[2,1,2,5,3,2]], 2],
    [[[5,1,5,2,5,3,5,4]], 5],
]
test(repeatedNTimes, cases)
