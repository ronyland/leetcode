/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    if (s.length === 0) {
        if (p !== '*' && p[1] !== '*' && p.length !== 0)
            return false
        else 
            return true
    }
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
                if (p[j - 1] === c || p[j - 1] === '.')
                    continue
                else if (p[j + 1] === c || p[j + 1] === '.') {
                    j += 2
                } else 
                    return false
                break
            default:
                if (p[j + 1] === '*') {
                    j++
                    i--
                } else 
                    return false
        }
    } 
    let nums = []
    let start = p[j] === '*' ? j + 1 : j
    if (j < p.length) {
        for(let x = start; x < p.length; x++) {
            if (p[x] === '*') {
                if (p[x - 1] !== '*' && p[x-1] !== '.') {
                    nums.pop()
                } 
            } else {
                nums.push(p[x] === '.' ? '*' : p[x])
            } 
        }
    }

    p = p.substring(0, start) + nums.join('')

    if (j < p.length && p[j] === '*' && p[j - 1] === '.') {
        let m = p.length - 1
        let n = s.length - 1
        while(m > j) {
            if ((p[m] === s[n] || p[m] === '.' || p[m] === '*') && n >= 0 ) {
                if (p[m] === '*') {
                    if(p[m-1] === s[n] || p[m-1] === s[n-1]) {
                        if (p[m-1] === s[n-1])
                            n--
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
        return true
    }

    let last = j
    if (j === p.length - 1 && p[j] !== '*') {
        return false
    }
    for(let k = j + 1; k < p.length; k++) {
        if (p[k] === '*') {
            if (k > j && p[k - 1] !== '*') {
                j += 2
            }
            else {
                j++
            }
        } else {
            if (k === p.length - 1 && p[last] === '*' && (p[k] === p[last - 1] || p[last - 1] === '.')) {
                return true
            } else {
                if(p[k + 1] !== '*') {
                    return false
                }
            }
        }
    } 
    return true
};

let start = Date.now()
console.log(isMatch('aasdfasdfasdfasdfas', 'aasdf.*asdf.*asdf.*asdf.*s'))
console.log(`running ${Date.now() - start} ms`)


/*
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
