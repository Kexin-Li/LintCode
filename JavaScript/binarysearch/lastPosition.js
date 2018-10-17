/**
 * Note: 一切都向 end 靠拢。
 *  - 当 nums[mid] === target 时，继续向 end 端查找；
 *  - 出循环后先判断 nums[end] === target。
 * 
 * @param nums: An integer array sorted in ascending order
 * @param target: An integer
 * @return: An integer
 */
const lastPosition = function (nums, target) {
  if (nums === null || nums.length === 0) {
    return -1;
  }
  let start = 0, end = nums.length - 1;
  while (start + 1 < end) {
    let mid = Math.round(start + (end - start) / 2);
    if (nums[mid] > target) {
      end = mid;
    } else if (nums[mid] <= target) {
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
}