let test = require('leetcode_test').test
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    let stack = [-1];       //预设一位（相当于是一个右括号），每来一个右括号会消除一位，堆栈不为空，消除的是左括号，匹配成立
    let longest = 0;

    for(let i = 0; i < s.length; i++) {
        if(s[i] === '(')
            stack.push(i)
        else {
            stack.pop();
            if(stack.length)    //只要堆栈中还有左括号，来右括号就会增加匹配长度
                longest = Math.max(longest, i-stack[stack.length-1]);
            else 
                stack.push(i)
        }
        
    }
    return longest
};

let cases = [               // [['', ''], ],
[[')()())(((())()()))'], 8],
[['(()'], 2],
[[''],0],
    [[')()())'], 4],
]
test(longestValidParentheses, cases)
