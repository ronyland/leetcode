let color = require('cli-color')
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

let testFn = isMatch
let cases = [               // [['', ''], ],
    [['aab', 'c*a*b'], true],
    [['abbabaaaaaaacaa', 'a*.*b.a.*c*b*a*c*'], true],
    [['aaa', 'a*a'], true],
    [['a', '..*'], true],
    [['aaa', 'aaaa'], false],
    [['', '.b*'], false],
    [['', '.*b'], false],
    [['', '.ac*'], false],
    [['aba', '.*.*'], true],
    [['', '.'], false],
    [['', 'c*c*'], true],
    [['', ''], true],
    [['', 'c*ab'], false],
    [['', '.*'], true],
    [['aaaaaaaaaaaaab', 'a*a*a*a*a*a*a*a*a*a*a*a*b'], true],
    [['aaca', 'ab*a*c*a'], true],
    [['mississippi', 'mis*is*p*.'], false],
    [['abbbcd', 'ab*bbbcd'], true],
    [['aasdfasdfasdfasdfas', 'aasdf.*asdf.*asdf.*asdf.*s'], true],
    [['a', '.*..a*'], false],
    [['a', 'ab*'], true],
    [['ab', '.*..'], true],
    [['ab', '.*a'], false],
    [['ab', '.a*'], false],
    [['ab', 'a.*b'], true],
    [['abcdef', '.*def'], true],
    [['bbbba', '.*a*a'], true],
    [['aaa', 'ab*a*c*a'], true],
    
]
let start = Date.now()
let success = 0
for(let al of cases) {
    let out = testFn.apply(null, al[0])
    if (out === al[1]) {
        success++
        console.log(color.green(`test success, Input: ${al[0]}, Expected: ${al[1]}, Output: ${out}`))
    } else {
        console.log(color.red(`test fail, Input: ${al[0]}, Expected: ${al[1]}, Output: ${out}`))
    }
}
let testResult = `Result: test ${cases.length} cases, success: ${success}, fail: ${cases.length - success}`
if(cases.length == success)
    console.log(color.bgGreen(testResult))
else
    console.log(color.bgRed(testResult))
console.log(`running ${Date.now() - start} ms`)


/*
"mississippi" "mis*is*p*." false
"aaca"  "ab*a*c*a" true
aab c*a*b
abbbcd ab*bbbcd true
aaa a*a true
aaa aaaa false
"aasdfasdfasdfasdfas"       "aasdf.*asdf.*asdf.*asdf.*s"    true
''    '.*'   true
"a"     ".*..a*"    false
ab   .*..   true
a    ab*   true
ab   .*a   true
ab   .*c   false
ab   a.*b  true
abcdef  .*def  true
bbbba .*a*a true

"aaa"
"ab*a*c*a"
*/



/*
class Solution {
    public boolean isMatch(String text, String pattern) {
        if (pattern.isEmpty()) return text.isEmpty();
        boolean first_match = (!text.isEmpty() &&
                               (pattern.charAt(0) == text.charAt(0) || 
                               pattern.charAt(0) == '.'));

        if (pattern.length() >= 2 && pattern.charAt(1) == '*'){
            return (isMatch(text, pattern.substring(2)) ||
                    (first_match && isMatch(text.substring(1), pattern)));
        } else {
            return first_match && isMatch(text.substring(1), pattern.substring(1));
        }
    }
}
*/