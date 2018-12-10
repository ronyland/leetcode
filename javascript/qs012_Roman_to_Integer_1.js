let test = require('leetcode_test').test
/**
 * @param {number} num
 * @return {string}
 */
const CODE = {
    1   : 'I',
    5   : 'V',
    10  : 'X',
    50  : 'L',
    100 : 'C',
    500 : 'D',
    1000: 'M',
}
var intToRoman = function(num) {
    if (num < 1 || num > 3999)
        return ''
    let i = 1000, rs = ''
    while(i > 0) {
        let n = (num / i) | 0
        num = num % i
        if (n > 0) {
            if (n > 5) {
                if (n === 9)
                    rs += CODE[i] + CODE[i * 10]
                else
                    rs += CODE[i*5] + new Array(n-5).fill(CODE[i]).join('')
            } else if (n < 5) {
                if (n === 4)
                    rs += CODE[i] + CODE[i*5]
                else
                    rs += new Array(n).fill(CODE[i]).join('')
            } else {
                rs += CODE[i*5]
            }
        }
        i = i /10 | 0
    }
    return rs
};

let cases = [               // [['', ''], ],
    [[15], 'XV'],
    [[58], 'LVIII'],
    [[9], 'IX'],
    [[4], 'IV'],
    [[3], 'III'],
    [[1994], 'MCMXCIV'],
    [[1006], 'MVI']
]
test(intToRoman, cases)
