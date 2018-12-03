/**
 * @param {string} s
 * @return {string}
 * 从两边向中间找
 */
var longestPalindrome = function(s) {
    if (s.length < 2 )
        return s
    let len = s.length
    let maxLen = 0
    let bg = 0
    let end = len
    for(let i = 0; i < len; ) {
        let c = s[i]
        let last = s.lastIndexOf(c, end)
        if (last <= i || last - i < maxLen) {
            i++
            end = len
            continue
        }
        let flag = true
        for(let j = i + 1; last - 2*j + i > 0 ; j++) {
            if (s[j] !== s[last - j + i]) {
                flag = false
                end = last - 1
                break;
            }
        }
        if (flag) {
            if (last - i + 1 > maxLen) {
                maxLen = last - i + 1
                bg = i
            }
            end = len
            i++
        }
    }
    return maxLen > 0 ? s.substr(bg, maxLen) : s[0]
};

console.log(longestPalindrome("abcdbbfcba"))