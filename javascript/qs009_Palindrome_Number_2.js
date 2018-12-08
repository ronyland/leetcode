/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0 || x % 10 === 0 && x > 0) return false;
    let reversed = 0;
    while (x > reversed) {
        reversed = reversed * 10 + x % 10;      //数值形式的低位向高位变换
        x = (x / 10) | 0;
    }
    //长度为偶数，相等；奇数，中间位在反向数中
    return x === reversed || ((reversed / 10) | 0) === x;
};

let start = Date.now()
console.log(isPalindrome(12321))
console.log(`running ${Date.now() - start} ms`)
