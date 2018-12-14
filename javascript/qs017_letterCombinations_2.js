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
    if (digits.length < 1) return []
    let stack = ['']
    for (let digit of digits) {
        let len = stack.length
        while(len-- > 0) {
            let ele = stack.pop()
            for (let al of CODES[digit]) {
                stack.unshift(ele + al)
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
