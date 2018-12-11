let test = require('leetcode_test').test

var longestCommonPrefix = function(strs) {
    let lenStrs = strs.length
    if(lenStrs === 0)
        return ''
    else if (lenStrs === 1)
        return strs[0]
    let len = strs[0].length, last = 0
    for(let i = 0; i < len; i++) {
        let flag = true
        for(let j = 0; j < lenStrs - 1; j++) {
            if (strs[j][i] !== strs[j+1][i]) {
                flag = false
                break
            }
        }
        if (flag) {
            last++
        } else {
            break
        }
    }
    return strs[0].substring(0, last)
};

let cases = [               // [['', ''], ],
    [[["flower","flower","flower"]], 'flower'],
    [[["flower","flow","flight"]], 'fl'],
    [[["dog","racecar","car"]], ''],
    [[['abc']], 'abc'],
    [[[]], '']
]
test(longestCommonPrefix, cases)
