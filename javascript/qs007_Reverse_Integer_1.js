/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let sign = x < 0 ? -1 : 1
    let absx = Math.abs(x)
    let rs = parseInt(absx.toString().split('').reverse().join('')) * sign
    let bound = Math.pow(2, 31)
    return rs >= bound * -1 && rs < bound ? rs : 0
};

let start = Date.now()
console.log(reverse(19))
console.log(`running ${Date.now() - start} ms`)
