let test = require('leetcode_test').test
//此方法迭代中倍增除数，这样商就可以每次 +1 +2 +4 ...。在某一时刻，当被除数小于除数的时候，把除数还原为初始值，然后继续倍增。
var divide = function(dividend, divisor) {
    const MIN = Math.pow(-2, 31), MAX = Math.pow(2, 31) - 1
    sign1 = dividend >= 0 ? 1 : -1
    sign2 = divisor >= 0 ? 1 : -1
    if(dividend > MAX || divisor > MAX)
        return MAX
    else if(dividend < MIN || divisor < MIN)
        return MIN
    dividend = Math.abs(dividend)
    divisor = Math.abs(divisor)

    let ans = __divide(dividend, divisor)

    ans = ans * sign1 * sign2
    if (ans < MIN)
        ans = MIN
    else if(ans > MAX)
        ans = MAX
    return ans

    function __divide(dividend, divisor) {
        let ans = 0
        let origin_divisor = divisor
        let factor = 1
        while(dividend >= divisor) {
            ans += factor
            dividend -= divisor
            divisor += divisor
            factor += factor
        }
        if (dividend >= origin_divisor)
            ans += __divide(dividend, origin_divisor)
        return ans
    }
};

let cases = [               // [['', ''], ],
    [[-999511578,-2147483648],0],
    [[1,3], 0],
    [[10,3], 3],
    [[7,-3], -2],
]
test(divide, cases)
