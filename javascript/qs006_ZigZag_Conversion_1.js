/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    let len = s.length
    if(numRows == 1 || numRows >= len){
        return s;
    }
    let map = {}
    let functor = 1, ct = 1, index = 0
    for(let i = 0; i < len; i++) {
        if (map[index] === undefined) {
            map[index] = []
        }
        map[index].push(s[i])
        index += functor
        ct++
        if (ct === numRows){
            functor *= -1
            ct = 1
        }
    }
    let rs = ''
    for(let i = 0; i < numRows; i++) {
        rs += map[i].join('')
    }
    return rs
};

let start = Date.now()
console.log(convert('ABaffasfd', 2))
console.log(`running ${Date.now() - start} ms`)
