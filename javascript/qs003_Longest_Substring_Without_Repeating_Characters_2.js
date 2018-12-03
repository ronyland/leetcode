var lengthOfLongestSubstring = function(s) {
    let maxLen = 0
    let strLen = s.length
    let idens = {}
    let idenLen = 0
    for (let i = 0; i < strLen; i++) {
        if (!idens[s[i]]) {
            idenLen++
            idens[s[i]] = 1
        }
    }
    if (idenLen === 1)
        return 1
    for (let i = 0; i < idenLen; i++) {
        for (var j = 0; j < strLen; j++) {
            let identity = {}
            for (var k = 0; k < idenLen - i && j + k < strLen; k++) {
                if (!identity[s[j + k]]) {
                    identity[s[j + k]] = 1
                } else {
                    break;
                }
            }
            if (k >= idenLen - i)
                return idenLen - i 
        }
    }
    return maxLen
};

let start = Date.now()
console.log(lengthOfLongestSubstring('bbbbb'))
console.log(`running ${Date.now() - start} ms`)