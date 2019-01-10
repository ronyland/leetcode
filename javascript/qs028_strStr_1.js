let test = require('leetcode_test').test
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (needle.length === 0) return 0
    let m = haystack.length, n = needle.length
    let i = 0, j = 0
    while(i <= m - n) {             //注意，退出条件很重要，若到m，则过不了测试（超时）。爆力解可以接受，KMP(见java版)是以空间换时间。
        while(i < m - n && haystack[i] !== needle[0]) i++;
        while(haystack[i] && haystack[i] === needle[j]){i++;j++}
        if (j >= needle.length)
            return i - j
        else {
            i = i - j + 1
            j = 0
        }
    }
    return -1
};

let cases = [               // [['', ''], ],
    [["mississippi","issip"], 4],
    [['aabacdbba', 'bba'], 6],
    [['bab',''], 0],
    [['hello', 'll'], 2],
]
test(strStr, cases)
