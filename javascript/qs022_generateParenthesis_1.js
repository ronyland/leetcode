let test = require('leetcode_test').test
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let ans = []
    function backtrack(s='',left=0,right=0){
        if (s.length === 2*n) {
            ans.push(s)
            return
        }
        if (left < n) {
            backtrack(s+'(', left+1, right)
        }
        if (right < left) {
            backtrack(s+')', left, right+1)
        }
    } 
    backtrack()
    return ans
};



let cases = [               // [['', ''], ],
    [[3], [
        "((()))",
        "(()())",
        "(())()",
        "()(())",
        "()()()"
      ]],
]
test(generateParenthesis, cases)
