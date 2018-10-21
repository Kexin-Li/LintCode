/**
 * 在想除了 HashMap 还有没有别的办法？
 * 
 * update: 如果是有序数组可以使用两个指针夹逼的方法，如果是无序数组可能还得使用 map 记住原来的下标。
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  if (nums === null || nums.length === 0) {
    return null;
  }
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i])) {
      return [map.get(target - nums[i]), i];
    }
    map.set(nums[i], i);
  }
  return [-1, -1];
};