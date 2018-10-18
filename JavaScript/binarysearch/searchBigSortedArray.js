/**
 * 倍增法。
 *  - 由于数组大到不知道长度。那么确定长度就成了使用二分法重要的事。
 *  - 每次增加 2 倍的数量来探索出包含 target 的数组长度。
 * 
 * @param A: an integer array
 * @param target: An integer
 * @return: An integer
 */
const searchBigSortedArray = function (A, target) {
  if (A === null || A.length === 0) {
    return -1;
  }
  let length = 1;
  while (length > 0) {
    if (A[length] < target) {
      break;
    }
    length *= 2;
  }
  let start = 0, end = length - 1;
  while (start + 1 < end) {
    let mid = Math.round(start + (end - start) / 2);
    if (A[mid] === target) {
      return mid;
    } else if (A[mid] < target) {
      start = mid;
    } else {
      end = mid;
    }
  }
  if (A[start] === target) {
    return start;
  }
  if (A[end] === target) {
    return end;
  }
  return -1;
}