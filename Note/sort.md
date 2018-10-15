# 排序算法

本文记录了常用的排序算法，按照时间复杂度的分类方式，分为时间复杂度为 `O(n^2)` 的算法，`O(nlogn)` 的算法和 `O(n)` 的算法依次讲解。

## 时间复杂度为 `O(n^2)` 的算法

常见的时间复杂度为 `O(n^2)` 的算法有冒泡排序，选择排序以及插入排序。

### 冒泡排序

首先是第一个数和第二个数进行比较，谁大谁在后面，接着第二个数和第三个数进行比较，谁大谁在后面。以此类推，经过一轮比较下来最大的数就沉到了最后一位。将数组范围缩小到 0-N-1，再经历一轮第二大的数就在倒数第二的位置。以此类推，当数组范围只剩一个数时，数组就变得有序了。

[JavaScript 代码](https://github.com/Kexin-Li/LintCode/blob/master/JavaScript/sort/BubbleSort.js), [Python 代码](https://github.com/Kexin-Li/LintCode/blob/master/Python/sort/BubbleSort.py)

![可视化过程](https://upload.wikimedia.org/wikipedia/commons/c/c8/Bubble-sort-example-300px.gif)

### 选择排序

首先在整个数组中选出最小的数放在最前面，接着在剩下的数组中选出最小的数放在第二个位置。以此类推，当剩下的数组只剩一个数时，整个数组就变得有序了。

[JavaScript 代码](https://github.com/Kexin-Li/LintCode/blob/master/JavaScript/sort/SelectSort.js), [Python 代码](https://github.com/Kexin-Li/LintCode/blob/master/Python/sort/SelectSort.py)

![可视化过程](https://upload.wikimedia.org/wikipedia/commons/9/94/Selection-Sort-Animation.gif)

### 插入排序

首先将第二个位置和第一个位置的数进行比较，谁小谁在前。第三个位置上的数和第一、二个位置上的数比较，插入合适的位置。第四个位置上的数和第一、二、三个位置上的数比较，插入合适的位置。以此类推，当安顿好了数组的最后一个数，整个数组也变得有序了。

[JavaScript 代码](https://github.com/Kexin-Li/LintCode/blob/master/JavaScript/sort/InsertSort.js), [Python 代码](https://github.com/Kexin-Li/LintCode/blob/master/Python/sort/InsertSort.py)

![可视化过程](https://upload.wikimedia.org/wikipedia/commons/0/0f/Insertion-sort-example-300px.gif)

## 时间复杂度为 `O(nlogn)` 的算法

常见的时间复杂度为 `O(nlogn)` 的算法有归并排序、快速排序、堆排序以及希尔排序。

### 归并排序

首先将数组中的每一个数看作长度为 1 的有序序列，然后把相邻的有序序列进行合并操作，得到最大长度为 2 的有序序列。接着再把相邻序列进行合并，得到最大程度为 4 的有序序列。以此类推，直到数组中的所有数合并成一个有序序列。

所以归并排序的思想在于**将两两有序序列合并成一个有序序列**。

[JavaScript 代码](https://github.com/Kexin-Li/LintCode/blob/master/JavaScript/sort/MergeSort.js), [Python 代码](https://github.com/Kexin-Li/LintCode/blob/master/Python/sort/MergeSort.py)

![可视化过程](https://upload.wikimedia.org/wikipedia/commons/c/cc/Merge-sort-example-300px.gif)

### 快速排序

首先在数组中随机选一个作为基准数(一般选择中点位置的数)，接着将数组中小于等于基准数的放到数组左边，大于基准数的放到数组右边，使得整个数组整体有序。然后再对左右两边分别递归调用上述过程，从而使整个数组有序。

[JavaScript 代码](https://github.com/Kexin-Li/LintCode/blob/master/JavaScript/sort/QuickSort.js), [Python 代码](https://github.com/Kexin-Li/LintCode/blob/master/Python/sort/QuickSort.py)

![可视化过程](https://upload.wikimedia.org/wikipedia/commons/6/6a/Sorting_quicksort_anim.gif)

### 堆排序

首先将数组中的 N 个数建成一个大小为 N 的大根堆，堆顶是所有元素中的最大值，将堆顶元素与堆的最后一个元素进行交换，将最大值脱离堆并作为有序部分放在数组的末尾。接着调整大根堆，将剩下元素的最大值放在堆顶然后脱离堆，加入有序部分。以此类推，当堆只剩下一个元素时，整个数组就有序了。

![可视化过程](https://upload.wikimedia.org/wikipedia/commons/4/4d/Heapsort-example.gif)

### 希尔排序

希尔排序是插入排序的改良版。插入排序的步长是 1，希尔排序的步长是从大到小逐渐调整的。

初始的步长需要我们来制定，比如 `6 5 3 1 8 7 2 4` 这个数组，我们选择初始步长为 3，那么 `6 5 3` 这前三个数可以暂不做调整。接着从 1 开始向前跳三位，与 6 进行比较，进而交换位置，再往前跳三位由于越界了所以不作调整了。然后看 8 这位数，向前跳三位与 5 比较，由于 8 > 5 所以不做调整。以此调整完整个数组，再修改步长为 2 和 1 再分别对数组做调整。

希尔排序的时间复杂度高低完全取决于步长的选择，步长选择越优那么它的时间复杂度越低，反之时间复杂度就越高。

## 时间复杂度为 `O(n)` 的算法

时间复杂度为 `O(n)` 的算法都不是基于比较的思想，而是基于[桶排序](https://zh.wikipedia.org/zh-hant/%E6%A1%B6%E6%8E%92%E5%BA%8F)的思想。常见的有计数排序和基数排序。

### 计数排序

详见[计数排序](https://zh.wikipedia.org/wiki/%E8%AE%A1%E6%95%B0%E6%8E%92%E5%BA%8F)

### 基数排序

详见[基数排序](https://zh.wikipedia.org/zh-hant/%E5%9F%BA%E6%95%B0%E6%8E%92%E5%BA%8F)

## 总结

| 名称 | 时间复杂度 | 空间复杂度 | 稳定性 |
| --- | :---: | :---: | :---: |
| 冒泡排序 | `O(n^2)` | `O(1)` | 稳定 |
| 选择排序 | `O(n^2)` | `O(1)` | 不稳定 |
| 插入排序 | `O(n^2)` | `O(1)`| 稳定 |
| 归并排序 | `O(n*logn)` | `O(n)`| 稳定 |
| 快速排序 | `O(n*logn)` | `O(logn)` ~ `O(n)` | 不稳定 |
| 堆排序 | `O(n*logn)` | `O(1)` | 不稳定 |
| 希尔排序 | `O(n*logn)` | `O(1)` | 不稳定 |
| 计数排序 | `O(n)` | `O(m)` | 稳定 |
| 基数排序 | `O(n)` | `O(m)` | 稳定 |

**Notes：**

- 计数排序与基数排序中的空间复杂度 `O(m)` 中的 m 指的是桶的数量。
- 稳定性：指相同值的元素在排序前和排序后的相对次序是否保持不变。
- 桶排序虽然时间复杂度高，但可以理解为是一种空间换时间的思想。当数据量很大时，需要准备的桶也就越多，会一定程序造成空间的浪费。因此具有很大的局限性。
- 快速排序之所以叫快速排序，不是因为它比堆排序、归并排序更优良，而是因为它的常量系数比较低。
- 在工程中，并不会特定使用某一种排序，而是综合使用。比如当元素个数比较少时，会使用插入排序；当元素个数较多时，会使用快速排序。