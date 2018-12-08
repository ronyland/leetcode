/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0)
        return false
    else {
        let nums = []
        while(x > 0) {
            nums.push(x % 10)
            x = Math.floor(x / 10)
        }
        for(let i = 0; i < nums.length - i - 1 ; i++) {
            if (nums[i] !== nums[nums.length - i - 1])
                return false
        }
        return true
    }
};

let start = Date.now()
console.log(isPalindrome(123216))
console.log(`running ${Date.now() - start} ms`)
