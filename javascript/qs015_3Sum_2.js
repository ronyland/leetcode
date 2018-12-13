let test = require('leetcode_test').test
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums){
    var result = [];
    if(nums == null || nums.length<3)
        return result;
        mergeSort(nums);//.sort(function(a,b){ return a - b; });
        for(var i=0, l = nums.length - 2; i<l; i++){
            if(i==0 || nums[i] > nums[i-1]){
                var j=i+1;
                var k=nums.length-1;
                while(j<k){
                    if(nums[i]+nums[j]+nums[k]==0){
                        result.push([nums[i], nums[j], nums[k]]);
                        j++;
                        k--;
                        //handle duplicate here
                        while(j<k && nums[j]==nums[j-1])
                            j++;
                        while(j<k && nums[k]==nums[k+1])
                            k--;
                    }else if(nums[i]+nums[j]+nums[k]<0){
                        j++;
                    }else{
                        k--;
                    }
                }
            }
        }
        return result;
    }
    var mergeSort = function(array) {
      function merge(arr, aux, lo, mid, hi) {
        var i = lo;
        var j = mid + 1;
        var k = lo;
        while(true){
          if(arr[i] <= arr[j]){
            aux[k++] = arr[i++];
            if(i > mid){
              do
                aux[k++] = arr[j++];
              while(j <= hi);
              break;
            }
          } else {
            aux[k++] = arr[j++];
            if(j > hi){
              do
                aux[k++] = arr[i++];
              while(i <= mid);
              break;
            }
          }
        }
      }
      function sortarrtoaux(arr, aux, lo, hi) {
        if (hi < lo) return;
        if (hi == lo){
            aux[lo] = arr[lo];
            return;
        }
        var mid = Math.floor(lo + (hi - lo) / 2);
        sortarrtoarr(arr, aux, lo, mid);
        sortarrtoarr(arr, aux, mid + 1, hi);
        merge(arr, aux, lo, mid, hi);
      }
      function sortarrtoarr(arr, aux, lo, hi) {
        if (hi <= lo) return;
        var mid = Math.floor(lo + (hi - lo) / 2);
        sortarrtoaux(arr, aux, lo, mid);
        sortarrtoaux(arr, aux, mid + 1, hi);
        merge(aux, arr, lo, mid, hi);
      }
      function merge_sort(arr) {
        var aux = arr.slice(0);
        sortarrtoarr(arr, aux, 0, arr.length - 1);
        return arr;
      }
    
      return merge_sort(array);
    }

let cases = [               // [['', ''], ],
  [[[]],[]],
  [[[1,-1,-1,0]],[-1,0,1]],
  [[[-1,0,1,0]],[[-1,0,1]]],
  [[[0,0,0,0]],[0,0,0]],
  [[[-1,2,-1]],[-1,-1,2]],
  [[[0,0,0]],[0,0,0]],
  [[[-1,0,1,2,-1,-4]],[[-1,-1,2],[-1,0,1]]],
  [[[-1,0,1,2,-1,-4]],[[-1,0,1],[-1,-1,2]]],
  [[[-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6]],[[-4,-2,6],[-4,0,4],[-4,1,3],[-4,2,2],[-2,-2,4],[-2,0,2]]],
  [[[-4,-2,1,-5,-4,-4,4,-2,0,4,0,-2,3,1,-5,0]],[[-5,1,4],[-4,0,4],[-4,1,3],[-2,-2,4],[-2,1,1],[0,0,0]]],
]
test(threeSum, cases)
