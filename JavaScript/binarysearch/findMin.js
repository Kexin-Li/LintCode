/**
 * 拿中间的数和最右的数相比，找出有序数组，最小的数一定不存在于有序数组。
 *  - 中间数 > 最右数，前半部分是有序数组，应该取后半部分找。
 *  - 中间数 < 最右数，后半部分是有序数组，应该取前半部分找。
 * 
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  if (nums === null || nums.length === 0) {
    return -1;
  }
  let start = 0, end = nums.length - 1;
  const lastNum = nums[end];
  while (start + 1 < end) {
    let mid = Math.round(start + (end - start) / 2);
    if (nums[mid] > lastNum) {
      start = mid;
    } else {
      end = mid;
    }
  }
  return nums[end] < nums[start] ? nums[end] : nums[start];
};