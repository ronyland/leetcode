var lengthOfLongestSubstring = function(s) {
    let maxLen = 0
    let strLen = s.length
    for (let i = 0; i < strLen; i++) {
        let identity = {}
        identity[s[i]] = 1
        for (var j = i + 1; j < strLen; j++) {
            if (!identity[s[j]]) {
                identity[s[j]] = 1
            } else {
                break;
            }
        }
        let len = j - i 
        if (len > maxLen) {
            maxLen = len
        }
        if (strLen - i <= maxLen)
            break
    }
    return maxLen
};

let start = Date.now()
console.log(lengthOfLongestSubstring('pwwkeuaef4wue554terfsryri5e65t4rferghtjrkr7e56w45ergfvhujw645erga'))
console.log(`running ${Date.now() - start} ms`)