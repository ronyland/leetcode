let test = require('leetcode_test').test
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var toLowerCase = function(str) {
    let ans = []
    for(let i = 0; i < str.length; i++) {
        if (str[i] >= 'A' && str[i] <= 'Z') {
            ans.push(String.fromCharCode(str[i].charCodeAt() + 32))
        } else {
            ans.push(str[i])
        }
    }
    return ans.join('')
};

let cases = [               // [['', ''], ],
    [['Hello'], 'hello'],
    [['here'], 'here'],
    [['LOVELY'], 'lovely'],
    [['Ilove., YOU'], 'ilove., you'],
]
test(toLowerCase, cases)
