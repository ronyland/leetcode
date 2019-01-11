let test = require('leetcode_test').test
//此方法先将除数和被除数都转换为正数，然后不断地从被除数中减去除数，减一个除数商就加一。但是这种方法太慢，正确但超时。
//请看方法二，迭代中倍增除数
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
    let ans = 0
    while(dividend >= divisor) {
        dividend -= divisor
        ans++
    }
    ans = ans * sign1 * sign2
    if (ans < MIN)
        ans = MIN
    else if(ans > MAX)
        ans = MAX
    return ans
};

let cases = [               // [['', ''], ],
    [[-999511578,-2147483648],0],
    [[1,3], 0],
    [[10,3], 3],
    [[7,-3], -2],
]
test(divide, cases)
