let test = require('leetcode_test').test
/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    let map = {}, count = 0
    for(let i = 0; i < J.length; i++) {
        map[J[i]] = 1
    }
    for(let i = 0; i < S.length; i++) {
        if (map[S[i]]) 
            count++
    }
    return count
};

/*
var numJewelsInStones = function(J, S) {
    var sArr = S.split('');
    var num = 0;
    for (var i = 0; i < sArr.length; i++) {
        if (J.indexOf(sArr[i]) > -1) {
            num++
        }
    }
    return num;
};
*/

let cases = [               // [['', ''], ],
    [['aA', 'aAAbbbb'], 3],
    [['z', 'ZZ'], 0],
    [['a', ''], 0],
    [['', 'afa'], 0],
    [['', ''], 0],

]
test(numJewelsInStones, cases)
