let test = require('leetcode_test').test
/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var subarraysDivByK = function(A, K) {
    let cs = []
    let s = 0, ans = 0
    cs[0] = 1;
    for (let i = 0; i < A.length; i++) {
        s = ((s + A[i]) % K + K) % K;
        ans += cs[s] || 0;
        cs[s] = (cs[s] || 0) + 1;
    }
    return ans;
};

let cases = [               // [['', ''], ],
    [[[4,5,0,-2,-3,1], 5], 7],
]
test(subarraysDivByK, cases)
