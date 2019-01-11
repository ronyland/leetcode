let test = require('leetcode_test').test
/**这是最基本的算法，会超时
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    var isValid = function(s, m, n) {
        const ins = ['(', '{', '[']
        const outs  = [')', '}', ']']
        let stack = []
        for (let i = m; i <= n; i++) {
            let cur = s[i]
            if (ins.indexOf(cur) > -1) {
                stack.push(cur)
            } else {
                let index = outs.indexOf(cur)
                let match = stack.pop()
                if (match !== ins[index])
                    return false
            }
        }
        return stack.length === 0
    };
    let max = 0
    let i = 0
    let j = s.length - 1
    while(j > i && s[j] === '(') j--
    let last = j
    while(i < s.length) {
        if(s[i] === '(') {
            while(j > i && !isValid(s,i,j)) j--
            if (j > i ) {
                let tmp = j - i + 1
                i = j + 1
                if (tmp > max)
                    max = tmp
            }
        }
        i++
        j = last
    }
    return max
};

let cases = [               // [['', ''], ],
    [[''],0],
    [['(()'], 2],
    [[')()())'], 4],
    [[')()())(((())))'], 8],
]
test(longestValidParentheses, cases)
