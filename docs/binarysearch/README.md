# 二分法

二分法使用的前提条件：**数组有序或部分有序**。

## 二分法模版

``` java
public int findPosition(int[] nums, int target) {
  if (nums == null || nums.length == 0) {
    return -1;
  }

  int start = 0, end = nums.length - 1;
  while (start + 1 < end) {
    int mid = start + (end - start) / 2;
    if (nums[mid] == target) {
      return mid;
    }
    if (nums[mid] < target) {
      start = mid;
    }
    if (nums[mid] > target) {
      end = mid;
    }
  }

  if (nums[start] == target) {
    return start;
  }
  if (nums[end] == target) {
    return end;
  }
  return -1;
}
```

### 三步翻转法

一个在某个位置旋转过的数组，使之恢复原样。

原数组：[4, 5, 1, 2, 3]

=> [5, 4, 1, 2, 3]

=> [5, 4, 3, 2, 1]

=> [1, 2, 3, 4, 5]

[相关题目](http://www.lintcode.com/problem/recover-rotated-sorted-array/)

### 快速幂算法

[相关题目](https://www.lintcode.com/problem/powx-n/description)

### 辗转相除法

辗转相除法， 又名欧几里德算法， 是求最大公约数的一种方法。它的具体做法是：用较大的数除以较小的数，再用除数除以出现的余数（第一余数），再用第一余数除以出现的余数（第二余数），如此反复，直到最后余数是0为止。如果是求两个数的最大公约数，那么最后的除数就是这两个数的最大公约数。

[相关题目](http://www.lintcode.com/problem/greatest-common-divisor/)