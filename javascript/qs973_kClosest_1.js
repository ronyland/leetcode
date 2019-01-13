let test = require('leetcode_test').test
/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
var kClosest = function(points, K) {
    let ans = new Array(K)
    let max, count = 0
    points.forEach((al) => {
        let dis = Math.pow(al[0],2) + Math.pow(al[1],2)
        if (!max) {
            max = dis
            ans[0] = [al,dis]
            count++
        } else if (count < K) {
            ans[count] = [al,dis]
            count++
            max = Math.max(max, dis)
        } else if (count >= K && max > dis) {
            let newMax = 0
            for (let i = 0; i < K; i++) {
                if (ans[i][1] === max) {
                    ans[i] = [al, dis]
                }
                newMax = Math.max(newMax, ans[i][1])
            }
            max = newMax
        }
    })
    return ans.map((al) => al[0])
};

let cases = [               // [['', ''], ],
[[[[68,97],[34,-84],[60,100],[2,31],[-27,-38],[-73,-74],[-55,-39],[62,91],[62,92],[-57,-67]],5],[[2,31],[-27,-38],[-55,-39],[-57,-67],[34,-84]]],
[[[[3,3],[5,-1],[-2,4]],2], [[3,3],[-2,4]]],
[[[[1,3],[-2,2]],1], [[-2,2]]],
]
test(kClosest, cases)
