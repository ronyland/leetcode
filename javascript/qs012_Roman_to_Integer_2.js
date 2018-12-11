let test = require('leetcode_test').test

let intToRoman = function(num) {
    let M = ['', 'M', 'MM', 'MMM'];
    let C = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];
    let X = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
    let I = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
    return M[~~(num / 1000)] + C[~~((num % 1000) / 100)] + X[~~((num % 100) / 10)] + I[~~((num % 10))];
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