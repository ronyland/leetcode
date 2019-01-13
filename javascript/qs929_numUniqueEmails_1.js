let test = require('leetcode_test').test
/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    let count = 0, map = {}
    emails.forEach((al) => {
        let two = al.split('@')
        if (two.length === 2) {
            let t1 = (two[0].split('+')[0]).replace(/\./g, '')
            let rs = `${t1}@${two[1]}`
            if(!map[rs]) {
                map[`${t1}@${two[1]}`] = 1
                count++
            }
        }
    })
    return count
};

let cases = [               // [['', ''], ],
    [[["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]], 2],
    [[[]],0]
]
test(numUniqueEmails, cases)
