/**
 * 先将非零的数往前移动，再在剩余的后半截补上零。
 * 
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let lastZeroIndex = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[lastZeroIndex++] = nums[i];
    }
  }
  
  for (let i = lastZeroIndex; i < nums.length; i++) {
    nums[i] = 0;
  }
};