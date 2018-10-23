/**
 * 负责将数组划分成单位为 1 的有序区间，再调用 merge() 来归并两个有序区间。
 * @param {array} arr 
 */
const mergeSort = function(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  
  let middle = Math.floor((0 + arr.length - 1) / 2);
  let left = arr.slice(0, middle);
  let right = arr.slice(middle, arr.length);

  return merge(mergeSort(left), mergeSort(right));
}

/**
 * 负责归并两个有序数组
 * @param {array} left 
 * @param {array} right 
 */
function merge(left, right) {
  let res = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      res.push(left.shift());
    } else {
      res.push(right.shift());
    }
  }
  while (left.length) {
    res.push(left.shift());
  }
  while (right.length) {
    res.push(right.shift());
  }
  return res;
}