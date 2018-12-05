/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let sign = x == Math.abs(x)
    x = Math.abs(x)
    
    let rev = 0
    while(x >= 1){
        rev = rev * 10 + x % 10
        x = Math.floor(x/10)
    }
    
    if(!sign){
        rev = -rev
    }
    
    let buond = Math.pow(2,31)
    if(rev > buond - 1 || rev < -buond){
        return 0
    }
    
    return rev
};

let start = Date.now()
console.log(reverse(19))
console.log(`running ${Date.now() - start} ms`)
