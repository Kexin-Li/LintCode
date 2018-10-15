# Array

## 子数组与前缀和

## 两个排序数组的中位数

这个题有三种做法：

1. 基于 FindKth 的算法。整体思想类似于 median of unsorted array 可以用 find kth from unsorted array 的解题思路。
2. 基于中点比较的算法。一头一尾各自丢掉一些，去掉一半的时候，整个问题的形式不变。可以推广到 median of k sorted arrays.
3. 基于二分的方法。二分 median 的值，然后再用二分法看一下两个数组里有多少个数小于这个二分出来的值。