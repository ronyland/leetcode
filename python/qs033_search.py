class Solution(object):
    def search(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: int
        """
        pos = 0
        while nums:
            index = len(nums)/2
            if nums[index] == target : return pos+index
            # if not confirmed target in the sorted sub-array
            #if not sort:
            if nums[0]>nums[index]:
                #right side is sorted
                #if target in right sorted sub-array
                if nums[index]<target and target <= nums[-1]:
                    pos += index
                    nums = nums[index:]
                #target in left rotated sub-array
                else:
                    nums = nums[:index]
            elif nums[0]<nums[index]:
                #left side is sorted
                #if target in left sorted sub-array
                if target < nums[index] and target >= nums[0]:
                    nums = nums[:index]
                #target in right rotated sub-array
                else:
                    nums = nums[index:]
                    pos += index
             
            if len(nums)==1 and nums[0]!=target : return -1
        return -1