let test = require('leetcode_test').test
/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    let udStack = [], lrStack = []
    moves.split('').forEach((al) => {
        let stack
        switch (al) {
            case 'U':
            case 'D':
                stack = udStack
                break
            case 'L':
            case 'R':
                stack = lrStack
            default:
                break;
        }
        if (stack) {
            if (stack.length === 0)
                stack.push(al)
            else {
                let last = stack[stack.length - 1]
                if (last === al)
                    stack.push(al)
                else
                    stack.pop()
            }
        }
    })
    return udStack.length === 0 && lrStack.length === 0
};

let cases = [               // [['', ''], ],
    [[''], true],
    [['UD'], true],
    [['RRDD'], false],
    [['LL'], false],
    [['LRUDRL'], true],
]
test(judgeCircle, cases)
