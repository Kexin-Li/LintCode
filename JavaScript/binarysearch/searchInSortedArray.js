/**
 * 类似于 Find Minimum in Sorted Array，首先找到有序的部分数组。
 * 再判断 target 在不在这部分里来决定指针的移动。
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
    if (nums[mid] > nums[end]) {
      // 左边有序
      if (target >= nums[start] && target <= nums[mid]) {
        // target 在左边
        end = mid;
      } else {
        start = mid;
      }
    } else {
      // 右边有序
      if (target >= nums[mid] && target <= nums[end]) {
        // target 在右边
        start = mid;
      } else {
        end = mid;
      }
    }
  }
  if (nums[start] === target) {
    return start;
  }
  if (nums[end] === target) {
    return end;
  }
  return -1;
};