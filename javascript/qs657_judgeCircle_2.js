let test = require('leetcode_test').test
/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
    let x = 0, y = 0
    let len = moves.length
    for (let i = 0; i < len; i++) {
        switch (moves[i]) {
            case 'U':
                y++
                break
            case 'D':
                y--
                break
            case 'L':
                x--
                break
            case 'R':
                x++
                break
            default:
                break;
        }
    }
    return x === 0 && y === 0
};

let cases = [               // [['', ''], ],
    [[''], true],
    [['UD'], true],
    [['RRDD'], false],
    [['LL'], false],
    [['LRUDRL'], true],
]
test(judgeCircle, cases)
