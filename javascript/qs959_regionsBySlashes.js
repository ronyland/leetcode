let test = require('leetcode_test').test
/**
 * @param {string[]} grid
 * @return {number}
 */
var regionsBySlashes = function(grid) {
    let len = grid.length
    let stack = [{x:0, y:0}], val = 0
    do {
        let cur = stack.shift()
        while(cur.y < len) {
            while(cur.x < len && cur.y < len && (grid[cur.x][cur.y] === ' ' || typeof grid[cur.x][cur.y] === 'number')) {
            val = grid[cur.x][cur.y] === ' ' ? 1 : val + 1
            let tmp = grid[cur.x].split('')
                tmp.splice(cur.y, 1, val)
                grid[cur.x] = tmp.join('')
                cur.x++
            }
            if (++cur.x < len) {
                stack.push({x: cur.x, y: cur.y})
            }
            cur.x = 0
            cur.y++
        }
        if (++cur.y < len)
            stack.push({x: cur.x, y: cur.y})
    } while(stack.length > 0) 
};

let cases = [               // [['', ''], ,true],
    [[[" /","/ "]], 2],
    [[[" /","  "]], 1],
    [[["\\/","/\\"]], 4],
    [[["/\\","\\/"]],5],
    [[["//","/ "]],3]
]
test(regionsBySlashes, cases)
