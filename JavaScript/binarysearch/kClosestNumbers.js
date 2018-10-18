/**
 * 二分法 + 双指针
 * 
 * @param A: an integer array
 * @param target: An integer
 * @param k: An integer
 * @return: an integer array
 */
const kClosestNumbers = function (A, target, k) {
  if (A === null || A.length === 0) {
    return null;
  }
  let res = [];
  let index = firstIndex(A, target);
  let start = index - 1, end = index;
  for (let i = 0; i < k; i++) {
    if (start < 0) {
      res[i] = A[end++];
    } else if (end >= A.length) {
      res[i] = A[start--];
    } else {
      if (Math.abs(target - A[start]) <= Math.abs(target - A[end])) {
        res[i] = A[start--];
      } else {
        res[i] = A[end++];
      }
    }
  }
  return res;
}

function firstIndex(A, target) {
  let start = 0, end = A.length - 1;
  while (start + 1 < end) {
    let mid = Math.round(start + (end - start) / 2);
    if (A[mid] >= target) {
      end = mid;
    } else {
      start = mid;
    }
  }
  if (A[start] >= target) {
    return start;
  }
  if (A[end] >= target) {
    return end;
  }
  return A.length;
}