/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    if (nums.length < 2)
        return null
    for (let i = 0; i < nums.length; i++) {
        let ele1 = nums[i]
        let ele2index  = nums.indexOf(target - ele1)
        if(ele2index > -1 && ele2index !== i)
            return [i, ele2index]
    }
    return null
};

console.log(twoSum([2,7,11,15], 9))