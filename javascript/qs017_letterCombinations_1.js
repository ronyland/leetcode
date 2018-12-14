let test = require('leetcode_test').test
/**
 * @param {string} digits
 * @return {string[]}
 */
const CODES = [
    [],
    [],
    ['a','b','c'],
    ['d','e','f'],
    ['g','h','i'],
    ['j','k','l'],
    ['m','n','o'],
    ['p','q','r','s'],
    ['t','u','v'],
    ['w','x','y','z']
]
var letterCombinations = function(digits) {
    let stack = []
    for (let i = 0; i < digits.length; i++) {
        if (i === 0) {
            stack = stack.concat(CODES[digits[i]])
        } else {
            let st = [].concat(stack)
            for (let j = 0; j < CODES[digits[i]].length - 1; j++)
                stack = stack.concat(st)
            for (let k = 0; k < stack.length; k++) {
                let len = st.length
                stack[k] += CODES[digits[i]][k / len | 0]
            }
        }
    }
    return stack
};

let cases = [               // [['', ''], ],
    [[[]],[]],
    [['23'], ["ad", "be", "bf", "cd", "ae", "af", "bd", "ce", "cf"]],
    [['237'], ["adp","adq","adr","ads","aep","aeq","aer","aes","afp","afq","afr","afs","bdp","bdq","bdr","bds","bep","beq","ber","bes","bfp","bfq","bfr","bfs","cdp","cdq","cdr","cds","cep","ceq","cer","ces","cfp","cfq","cfr","cfs"]]
]
test(letterCombinations, cases)
