let color = require('cli-color')
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = (s, p) => {
    let cache = Object.create(null);
    const dp = (i, j) => {
        if (cache[i] && cache[i][j] !== undefined) {
            return cache[i][j] === true;
        }
        let ans;
        if (j === p.length) {
            ans = (i === s.length);
        } else {
            let first = 
                (i < s.length && (p[j] === s[i] || p[j] === "."));
            if ((j+1) < p.length && p[j+1] === "*") {
                ans = dp(i, j+2) || first && dp(i+1, j);
            } else {
                ans = first && dp(i+1, j+1);
            }
        }
        if (!cache[i]) {
            cache[i] = {};
        }
        cache[i][j] = ans ? true : false;
        return ans;
    }
    return dp(0,0);
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
        console.log(color.green(`test success, Input: '${al[0].join("','")}', Expected: ${al[1]}, Output: ${out}`))
    } else {
        console.log(color.red(`test fail, Input: '${al[0].join("','")}', Expected: ${al[1]}, Output: ${out}`))
    }
}
let testResult = `Result: test ${cases.length} cases, success: ${success}, fail: ${cases.length - success}`
if(cases.length == success)
    console.log(color.bgGreen(testResult))
else
    console.log(color.bgRed(testResult))
console.log(`running ${Date.now() - start} ms`)


/*
class Solution {
    public boolean isMatch(String text, String pattern) {
        boolean[][] dp = new boolean[text.length() + 1][pattern.length() + 1];
        dp[text.length()][pattern.length()] = true;

        for (int i = text.length(); i >= 0; i--){
            for (int j = pattern.length() - 1; j >= 0; j--){
                boolean first_match = (i < text.length() &&
                                       (pattern.charAt(j) == text.charAt(i) ||
                                        pattern.charAt(j) == '.'));
                if (j + 1 < pattern.length() && pattern.charAt(j+1) == '*'){
                    dp[i][j] = dp[i][j+2] || first_match && dp[i+1][j];
                } else {
                    dp[i][j] = first_match && dp[i+1][j+1];
                }
            }
        }
        return dp[0][0];
    }
}

class Solution {
    Result[][] memo;

    public boolean isMatch(String text, String pattern) {
        memo = new Result[text.length() + 1][pattern.length() + 1];
        return dp(0, 0, text, pattern);
    }

    public boolean dp(int i, int j, String text, String pattern) {
        if (memo[i][j] != null) {
            return memo[i][j] == Result.TRUE;
        }
        boolean ans;
        if (j == pattern.length()){
            ans = i == text.length();
        } else{
            boolean first_match = (i < text.length() &&
                    (pattern.charAt(j) == text.charAt(i) ||
                            pattern.charAt(j) == '.'));

            if (j + 1 < pattern.length() && pattern.charAt(j+1) == '*'){
                ans = (dp(i, j+2, text, pattern) ||
                        first_match && dp(i+1, j, text, pattern));
            } else {
                ans = first_match && dp(i+1, j+1, text, pattern);
            }
        }
        memo[i][j] = ans ? Result.TRUE : Result.FALSE;
        return ans;
    }
}
*/