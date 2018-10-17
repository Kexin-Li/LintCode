/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  if (nums === null || nums.length === 0) {
    return -1;
  }
  let start = 0, end = nums.length - 1;
  while (start + 1 < end) {
    let mid = Math.round(start + (end - start) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > target) {
      end = mid;
    } else {
      start = mid;
    }
  }
  if (nums[end] === target) {
    return end;
  }
  if (nums[start] === target) {
    return start;
  }
  return -1;
};