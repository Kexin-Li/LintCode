/**
 * Note: 一切都向 start 靠拢。
 *  - 当 nums[mid] === target 时，继续向 start 端查找；
 *  - 出循环后先判断 nums[start] === target。
 * 
 * @param nums: The integer array.
 * @param target: Target to find.
 * @return: The first position of target. Position starts from 0.
 */
const binarySearch = function (nums, target) {
  if (nums === null || nums.length === 0) {
    return -1;
  }
  let start = 0, end = nums.length - 1;
  while (start + 1 < end) {
    let mid = Math.round(start + (end - start) / 2);
    if (nums[mid] >= target) {
      end = mid;
    } else if (nums[mid] < target) {
      start = mid;
    }
  }
  if (nums[start] === target) {
    return start;
  }
  if (nums[end] === target) {
    return end;
  }
  return -1;
}