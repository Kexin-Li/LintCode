/**
 * @param nums: a mountain sequence which increase firstly and then decrease
 * @return: then mountain top
 */
const mountainSequence = function (nums) {
  if (nums === null || nums.length === 0) {
    return 0;
  }
  let start = 0, end = nums.length - 1;
  while (start + 1 < end) {
    let mid = Math.round(start + (end - start) / 2);
    if (nums[mid] > nums[mid + 1]) {
      end = mid;
    } else if (nums[mid] < nums[mid + 1]) {
      start = mid;
    }
  }
  return nums[start] > nums[end] ? nums[start] : nums[end];
}