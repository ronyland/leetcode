/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
    let rs = parseInt(str) || 0
    
    let bound = Math.pow(2, 31)
    if (rs < -bound)
        rs = -bound
    else if (rs >= bound)
        rs = bound - 1
    return rs
};

let start = Date.now()
console.log(myAtoi("words and 987"))
console.log(`running ${Date.now() - start} ms`)
