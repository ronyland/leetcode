let test = require('leetcode_test').test
/**
 * @param {number} num
 * @return {string}
 */
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
    var total = s.length, index = 0
    var rs = 0, cur_c, next_c 
    while(index < total){
        cur_c = s[index];
        next_c = s[index+1];
        if(CODE[cur_c] < CODE[next_c]){
            rs -= CODE[cur_c]
        } else {
            rs += CODE[cur_c] || 0
        }
        index++;
    }
    return rs;
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