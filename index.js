let color = require('cli-color')
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
    if (s.length === 0) {
        if ((p === '*' || p[1] === '*' || p.length === 0) && p.length < 3)
            return true
        else if ((p === '*' || p[1] === '*' || p.length === 0) && p.length > 3) {
            let nums = []
            for (let x = 3; x < p.length; x++) {
                if (p[x] === '*') {
                    if (p[x - 1] !== '*' && p[x - 1] !== '.') {
                        nums.pop()
                    }
                } else {
                    nums.push(p[x] === '.' && p[x + 1] === '*' ? '*' : p[x])
                }
            }
            if (nums.length === 0)
                return true
            else 
                return false
        } else 
            return false
    }
    let pXinIndex = 0
    for (var i = 0, j = 0; i < s.length; i++) {
        if (j >= p.length)
            return false
        let c = s[i]
        let rc = p[j]

        switch (rc) {
            case c:
            case '.':
                j++
                break
            case '*':
                pXinIndex = j + 1
                while (p[pXinIndex] === p[j - 1]) {
                    pXinIndex++
                }
                if (p[j - 1] === c || p[j - 1] === '.') {
                    break
                } else if (p[pXinIndex] === c || p[pXinIndex] === '.') {
                    j = pXinIndex + 1
                } else {
                    if (p[pXinIndex] === '*') {
                        j=pXinIndex+1
                        i--
                    } else 
                        return false
                }
                break
            default:
                if (p[j + 1] === '*') {
                    j+=2
                    i--
                } else 
                    return false
        }
    } 
    let start = p[j] === '*' ? j + 1 : j
    let nums = []
    for (let x = start; x < p.length; x++) {
        if (p[x] === '*') {
            if (p[x - 1] !== '*' && p[x - 1] !== '.') {
                nums.pop()
            }
        } else {
            nums.push(p[x] === '.' && p[x+1] === '*' ? '#' : p[x])  // # === .*
        }
    }
    if (j < p.length && nums.length > 0) {
         if(p[j] !== '*' && (nums[0] !== '#' || nums[1] !== undefined && nums[1] !== '*'))
            return false
        
        p = p.substring(0, start) + nums.join('')

        let m = p.length - 1
        let n = s.length - 1
        while (m > j) {
            if ((p[m] === s[n] || p[m] === '.' || p[m] === '*' || p[m] === '#') && n >= 0) {
                if (p[m] === '*' || p[m] === '#') {
                    if (p[m - 1] === s[n] || p[m - 1] === s[n - 1]) {
                        if (p[m - 1] === s[n - 1])
                            n--
                        m--
                    }
                    else if (p[m] === '*' || p[m] === '#') {
                        m--
                    } else
                        return false
                } else {
                    m--
                    n--
                }
            } else {
                return false
            }
        }
    }  
    return true
};

let cases = [               // [['', ''], ],
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
    [['aab', 'c*a*b'], true],
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

let testFn = isMatch
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
