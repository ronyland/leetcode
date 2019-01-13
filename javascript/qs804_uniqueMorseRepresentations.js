let test = require('leetcode_test').test
/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    const CODES = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
    let map = {}, aCode = 'a'.charCodeAt()
    words.forEach((word) => {
        let rs = [...word].reduce((tot, al) => {
            return tot + CODES[al.charCodeAt() - aCode]
        }, '')
        map[rs] = 1
    })
    return Object.keys(map).length
};

let cases = [               // [['', ''], ],
    [[["gin", "zen", "gig", "msg"]], 2],
]
test(uniqueMorseRepresentations, cases)
