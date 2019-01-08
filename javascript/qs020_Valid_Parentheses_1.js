let test = require('leetcode_test').test
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const ins = ['(', '{', '[']
    const outs  = [')', '}', ']']
    let stack = []
    for (let i = 0; i < s.length; i++) {
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

let cases = [               // [['', ''], ],
    [['['], false],
    [['()'], true],
    [['()[]{}'], true],
    [['(]'], false],
    [['([)]'], false],
    [['{[]}'], true],
]
test(isValid, cases)
