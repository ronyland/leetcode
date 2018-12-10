let test = require('leetcode_test').test
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
    if (p.length === 0) {
        return s.length === 0
    }
    firstMath = s.length > 0 && 
                (p[0] === s[0] ||
                p[0] === '.')
    if (p.length >= 2 && p[1] === '*') {
        //下面或的两部分，不能换位置
        return firstMath && isMatch(s.substring(1), p) || isMatch(s, p.substring(2))
    } else {
        return firstMath && isMatch(s.substring(1), p.substring(1))
    }
};

let cases = [               // [['', ''], ],
    [['abbabaaaaaaacaa', 'a*.*b.a.*c*b*a*c*'], true],
    [['aaa', 'a*a'], true],
    [['a', '..*'], true],
]
test(isMatch, cases)
