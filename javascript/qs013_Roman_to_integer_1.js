let test = require('leetcode_test').test
/**
 * @param {number} num
 * @return {string}
 */
const roman = ['M', 'D', 'C', 'L', 'X', 'V', 'I']
const CODE = {
    'I' :  1   ,
    'V' :  5   ,
    'X' :  10  ,
    'L' :  50  ,
    'C' :  100 ,
    'D' :  500 ,
    'M' :  1000,
}
var romanToInt = function(s) {
    let rs = 0
    roman.forEach((al) => {
        let tmp = s.split(al)
        for (let i = 0; i < tmp.length - 1; i++) {
            rs += tmp[i] === '' ? CODE[al] : CODE[al] - CODE[tmp[i]]
        }
        s = tmp[tmp.length - 1]
    })
    return rs
};

let cases = [               // [['', ''], ],
    [['III'], 3],
    [['XV'], 15],
    [['LVIII'], 58],
    [['IX'], 9],
    [['IV'], 4],
    [['III'], 3],
    [['MCMXCIV'], 1994],
    [['MVI'], 1006]
]
test(romanToInt, cases)
