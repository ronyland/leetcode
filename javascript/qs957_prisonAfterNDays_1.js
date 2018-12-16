let test = require('leetcode_test').test
/**
 * @param {number[]} cells
 * @param {number} N
 * @return {number[]}
 */
var prisonAfterNDays = function (cells, N) {
    let len = cells.length, k = 0
    let obj = Object.create(null)
    if (len === 8 && N >= 1 && N <= Math.pow(10, 9)) {
        while (k <  N) {
            let newKey = [cells.join('')]
            if (obj[newKey]) {
                // console.log(`key: ${newKey} --- value: ${k} --- old value: ${obj[newKey]}`)
                let z = (N - obj[newKey]) % (k - obj[newKey])
                for (let al of Object.entries(obj)) {
                    if(al[1] === z + obj[newKey]){
                        return al[0].split('').reduce((total, a) => {
                            return total.concat(parseInt(a))
                        }, [])
                    }
                }
            } else {
                obj[newKey] = k
            }
            
            let pre = cells[0]
            cells[0] = 0
            for (let i = 1; i < len - 1; i++) {
                let cur = cells[i]
                cells[i] = pre === cells[i + 1] ? 1 : 0
                pre = cur
            }
            cells[len - 1] = 0

            k++
        }
        return cells
    } else {
        return null
    }
};

let cases = [               // [['', ''], ],
[[[1, 1, 0, 1, 1, 0, 1, 1],6],[0,0,1,0,0,1,0,0],false],
[[[1,0,0,1,0,0,1,0],1000000000], [0,0,1,1,1,1,1,0],false],
[[[1, 1, 0, 1, 1, 0, 0, 0],1],[0,0,1,0,0,0,1,0],false],
[[[0,1,0,1,1,0,0,1],7], [0, 0, 1, 1, 0, 0, 0, 0],false],
]
test(prisonAfterNDays, cases)
