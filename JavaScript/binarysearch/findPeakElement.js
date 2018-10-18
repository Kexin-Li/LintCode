/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
  if (nums === null || nums.length === 0) {
    return -1;
  }
  let start = 0, end = nums.length - 1;
  while (start + 1 < end) {
    let mid = Math.round(start + (end - start) / 2);
    if (nums[mid] > nums[mid - 1]) {
      if (nums[mid] > nums[mid + 1]) {
        return mid;
      } else {
        start = mid;
      }
    } else {
      end = mid;
    }
  }
  return nums[start] > nums[end] ? start : end;
};