let test = require('leetcode_test').test
/**
    解题思路:
    1.判断按照字典序有木有下一个，如果完全降序就没有下一个
    2.如何判断有木有下一个呢？只要存在a[i-1] < a[i]的升序结构，就有，而且我们应该从右往左找，一旦找到，因为这样才是真正下一个
    3.当发现a[i-1] < a[i]的结构时，从在[i, ∞]中找到最接近a[i-1]并且又大于a[i-1]的数字，由于降序，从右往左遍历即可得到k
    4.然后交换a[i-1]与a[k]，然后对[i, ∞]排序即可，排序只需要首尾不停交换即可，因为已经是降序 上面说的很抽象，还是需要拿一些例子思考才行，比如[0,5,4,3,2,1]，下一个是[1,0,2,3,4,5]
 */
var nextPermutation = function(nums) {
    let len = nums.length
    let before = len - 2, after = len - 1
    while(before >= 0 && nums[before] >= nums[after]) {
        --before
        --after
    }
    if (before < 0) {
        nums.reverse()
    } else {
        for (after = len - 1; nums[after] <= nums[before] ; --after){
            ;
        }
        if (after >= 0) {
            swap(nums, before, after)
            for (let i = before + 1, j = len - 1; i < j; i++ , j--) {
                swap(nums, i, j)
            }
        }
    }
    return nums

    function swap(nums, i, j) {
        nums[i] = nums[i] ^ nums[j]
        nums[j] = nums[i] ^ nums[j]
        nums[i] = nums[i] ^ nums[j]
    }
};

let cases = [               // [['', ''], ],
    [[[5,1,1]],[1,1,5],false],
    [[[1,1]],[1,1],false],
    [[[0,5,4,3,2,1]], [1,0,2,3,4,5],false],
    [[[3,2,1]], [1,2,3],false],
]
test(nextPermutation, cases)
