/**
 * 三指针法
 * 
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  if (nums === null || nums.length === 0) {
    return;
  }
  let start = 0, end = nums.length - 1;
  for (let i = 0; i <= end; i++) {
    if (nums[i] === 0) {
      nums[i] = nums[start];
      nums[start++] = 0;
    } else if (nums[i] === 2) {
      nums[i] = nums[end];
      nums[end--] = 2;
      i--;
    }
  }
};