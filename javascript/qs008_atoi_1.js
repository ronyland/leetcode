/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    let len = str.length
    let sign = 1
    let number = []
    let rs = 0
    let flag = false
    for(let i = 0; i < len; i++) {
        let c = str[i]
        switch (true) {
            case c === ' ':
                if (flag)
                    i = len
                break
            case c >= '0' && c <= '9':
                flag = true
                number.unshift(c)
                break
            case c === '+':
                if (flag)
                    i = len
                flag = true
                break
            case c === '-':
                if (flag)
                    i = len
                else {
                    sign = -1
                    flag = true
                }
                break
            default:
                i = len
        }
    }
    for (let i = 0; i < number.length; i++) {
        rs += number[i] * sign * Math.pow(10, i)
    }
    let bound = Math.pow(2, 31)
    if (rs < -bound)
        rs = -bound
    else if (rs >= bound)
        rs = bound - 1
    return rs
};

let start = Date.now()
console.log(myAtoi("0-4"))
console.log(`running ${Date.now() - start} ms`)

//0-4,+-2,-0 89,12-
