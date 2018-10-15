# 双指针算法

## 相向双指针

相向双指针，指的是在算法一开始，两根指针分别位于数组或字符串的两端，相向而行。常见的算法题有：翻转字符串，比如在[binary search笔记](binarysearch.md)中的三步翻转法。

双指针模版的`for`循环写法：

``` java
public void reverse(int[] A) {
  for (int i = 0, j = A.length - 1; i < j; i++, j--) {
    int temp = A[i];
    A[i] = A[j];
    A[j] = temp;
  }
}
```

双指针模版的`while`循环写法：

``` java
public void reverse(int[] A) {
  int start = 0, end = A.length - 1;
  while (start < end) {
    int temp = A[satrt];
    A[start] = A[end];
    A[end] = temp;
    start++;
    end--;
  }
}
```

### Two Sum

寻找一个数组中想加起来等于 target 的两个数。例如：

`[2, 7, 10, 13]`, target = `9`.

return: `[0,1]`

法一：利用 HashSet(或HashMap)。遍历数组，通过判断当前值的另一半是否在 HashSet 中来同时找到两个值。

``` java
public int[] twoSum(int[] A, int target) {
  int[] results = new int[2];
  if (A == null || A.length == 0) {
    return results;
  }

  Set<Integer> set = new HashSet<>();
  for (int i = 0; i < A.length; i++) {
    if (set.contains(target-A[i])) {
      results[0] = target - A[i];
      results[1] = A[i];
      return results;
    } else {
      set.add(A[i]);
    }
  }

  return results;
}
```

法二：双指针法。先将数组排序，左右指针分别指向头和尾，如果当前两个指针指向的值相加小于target，那么左指针++；如果当前两个指针指向的值相加大于target，那么右指针--。

``` java
public int[] twoSum(int[] A, int target) {
  int[] results = new int[2];
  if (A == null || A.length == 0) {
    return results;
  }

  Arrays.sort(A);

  int left = 0, right = A.length - 1;
  while (left < right) {
    if (A[left] + A[right] < target) {
      left++;
    }
    if (A[left] + A[right] > target) {
      right--;
    }
    if (A[left] + A[right] == target) {
      results[0] = A[left];
      results[0] = A[right];
      return results;
    }
  }
  return results;
}
```

其中 HashMap 的解法需要`O(n)`的空间与时间，双指针的解法需要`O(1)`的空间与`O(n)`的时间。

### 判断回文串

``` java
public boolean isPalindrome(String s) {
  if (s == null || s.length() == 0) {
    return true;
  }
  for (int i = 0, i = s.length() - 1; i < j; i++, j--) {
    if (s.charAt(i) != s.charAt(j)) {
      return false;
    }
  }
  return true;
}
```

Follow up: 判断回文串的时候不区分大小写，且忽略非英文字母。

对于不区分大小写这一点可以在比较时统一变成小写或大写来比较。忽略非英文字母需要使用`while`来不断跳过非英文字母。

``` java
public boolean isPalindrome(String s) {
  if (s == null || s.length() == 0) {
    return true;
  }

  int start = 0, end = s.length() - 1;
  while (start < end) {
    while (start < s.length() && !isValid(s.charAt(start))) {
      start++;
    }
    if (start == s.length()) {
      return true;
    }
    while (end >= 0 && !isValid(s.charAt(end))) {
      end--;
    }

    if (Character.toUpperCase(s.charAt(start)) != Character.toUpperCase(s.charAt(end))) {
      break;
    } else {
      start++;
      end--;
    }
  }

  return end <= start;
}

private boolean isValid(char c) {
  return Character.isLetter(c) || Character.isDigit(c);
}
```

## 同向双指针

同向双指针指的是两根指针都从头出发，朝着一个方向前进。可以解决以下问题：

- 数组去重问题：[Remove duplicates in an array](../src/org/likexin/twopointer/Deduplication.java)
- 滑动窗口问题：[Window Sum](../src/org/likexin/twopointer/WinSum.java)
- 两数之差问题：[Two Difference](../src/org/likexin/twopointer/TwoSum7.java)
- 链表中点问题：[Middle of Linked List](../src/org/likexin/twopointer/MiddleNode.java)
- 带环链表问题：[Linked List Cycle](../src/org/likexin/twopointer/HasCycle.java)

## 快速排序算法

快速排序是一种先整体有序再部分有序的算法，它先选取一个 pivot 基准数，比 pivot 小的都扔到左边，比 pivot 大的都扔到右边，这样就实现了整体有序。再递归左边和右边做同样的操作，就会使得部分也变得有序。

[Quick Sort 解法](../src/org/likexin/twopointer/QuickSort.java)

## 归并排序算法

归并排序是一种先部分有序再整体有序的算法，它先递归左右两边使之有序，再归并两个有序的部分。将两个有序数组合并成一个数组需要耗费`O(n)`的空间。

[Merge Sort 解法](../src/org/likexin/twopointer/MergeSort.java)

## 快排与归并排序的区别

1. 快速排序的**平均**时间复杂度是`O(nlogn)`，最坏情况的时间复杂度是`O(n^2)`，比如`1, 2, 3, 4, ..., n`。
2. 归并排序的时间复杂度也是`O(nlogn)`，不管是最好还是最坏的情况它的时间复杂度都是`O(nlogn)`。
3. 快排的空间复杂度是`O(1)`，而归并排序的空间复杂度是`O(n)`，原因是在归并两个有序数组部分时开辟了另外一个数组来存储。
4. 快排是不稳定的，归并排序是稳定的。这里的稳定性指的是排完序后的相对位置与原数组保持不变。