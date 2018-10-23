/**
 * partition 函数是核心部分，包括找 pivot，以及分离大于 pivot 和小于 pivot 的数。
 * quick 函数负责递归。
 * @param {array} arr
 */
const quickSort = function(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  return quick(arr, 0, arr.length - 1);
}

/**
 * 递归操作左右两个数组
 * @param {array} arr 
 * @param {number} left 
 * @param {number} right 
 */
function quick(arr, left, right) {
  let index = partition(arr, left, right);
  if (left < index - 1) {
    quick(arr, left, index - 1);
  }
  if (right > index) {
    quick(arr, index, right);
  }
  return arr;
}

/**
 * 实现将小的数放到数组左边，大的数放到数组右边的功能。
 * @param {array} arr 
 * @param {number} left 
 * @param {number} right 
 */
function partition(arr, left, right) {
  // 基准点
  let pivot = arr[Math.floor(left + (right - left) / 2)];
  let i = left, j = right;

  while (i <= j) {
    // 使得 i 指向大于 pivot 的第一位(left to right)
    while (arr[i] < pivot) {
      i++;
    }
    // 使得 j 指向小于 pivot 的第一位(right to left)
    while (arr[j] > pivot) {
      j--;
    }
    if(i <= j) {
      swap(arr, i, j);
      i++; j--;
    }
  }
  return i;
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}