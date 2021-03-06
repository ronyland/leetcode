/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var map = Object.create(null)                   //用map改进效率
     for (let i = nums.length - 1; i >= 0; i--) {   //从高位开始，让下标顺序自然符合要求
         left = target - nums[i]
         if (left in map)
         {
             return [i,map[left]]
         }
         map[nums[i]] = i;
     }
};

console.log(twoSum([2,7,11,15], 17))