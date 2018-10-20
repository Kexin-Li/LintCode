/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  if (nums === null || nums.length === 0) {
    return [-1, -1];
  }
  let start = 0, end = nums.length - 1;
  let res = [];
  while (start + 1 < end) {
    let mid = Math.round(start + (end - start) / 2);
    if(nums[mid] === target) {
      let first = mid, last = mid;
      while (nums[first] === target) {
        first--;
      }
      while (nums[last] === target) {
        last++;
      }
      res.push(first + 1);
      res.push(last - 1);
      return res;
    } else if (nums[mid] > target) {
      end = mid;
    } else {
      start = mid;
    }
  }
  if (nums[start] === target && nums[end] === target) {
    res.push(start > end ? end : start);
    res.push(start > end ? start : end);
    return res;
  }
  if (nums[start] === target) {
    return [start, start];
  }
  if (nums[end] === target) {
    return [end, end];
  }
  return [-1, -1];
};