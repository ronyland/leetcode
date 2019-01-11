let test = require('leetcode_test').test
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    let n = s.length, longest = 0
    let st = []
    for (let i = 0; i < n; i++) {
        if (s[i] === '(') st.push(i)
        else {
            if (st.length > 0) {
                if (s[st[st.length - 1]] === '(') st.pop()
                else st.push(i)
            }
            else st.push(i)
        }
    }
    if (st.length === 0) longest = n
    else {
        let a = n, b = 0
        while (st.length > 0) {
            b = st[st.length - 1]
        st.pop()
        longest = Math.max(longest, a-b-1)
        a=b
        }
        longest = Math.max(longest, a)
    }
    return longest
};

let cases = [               // [['', ''], ],
    [[''],0],
    [['(()'], 2],
    [[')()())'], 4],
    [[')()())(((())))'], 8],
]
test(longestValidParentheses, cases)
