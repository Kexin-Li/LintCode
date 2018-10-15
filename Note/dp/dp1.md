# 动态规划（一）

动态规划可以理解为用来优化递归的，比起递归，它少去了重复计算的部分。

## 通过 Fibonacci Sequence 理解递归

定义 Fibonacci 数列为：`0 1 1 2 3 5 8 13 ...`

即从第三个数起，第 n 的数的值为前两个数的和。写一段程序来求第 n 个数的值。

### 递推公式

第一步，根据题目可得递推公式：

``` java
Fib(i) = Fib(i - 1) + Fib(i - 2);
```

### 递归出口

第二步，寻找递归出口，当 `i == 0` 时，`Fib(i) == 0`；当 `i == 1` 时，`Fib(i) == 1`。

### 递归代码(O(2^n))

所以，递归方法的代码为：

``` java
public int fibnacci(int n) {
  if (n <= 1) {
    return n;
  }
  return fibnacci(n - 1) + fibnacci(n - 2);
}
```

这样的递归代码会产生不少的重复计算，又叫[重叠子问题(overlap sub-problems)](https://en.wikipedia.org/wiki/Overlapping_subproblems)，导致时间复杂度为 `O(2^n)`。比如，如果我要计算 Fib(5)：

Fib(5) = Fib(4) + Fib(3)

``` java
         F(5)
       /      \
     F(4)      F(3)
    /   \      /   \
  F(3)  F(2)  F(2) F(1)
  /  \
F(2) F(1)
```

可以看到，单求一个 F(5)，就需要计算 F(3) 两次。更何况如果是求 F(100)，就会重复计算更多的数。

因此，我们可以想到这样一种方法，当第一次求出 F(3) 时，就把这个值保存下来，在下一次需要求 F(3) 时，直接读取保存下来的值。这样的话，每个数只需要求解一次，时间复杂度下降到 `O(n)`。

**这种利用保存中间值来去除重复计算的方式差不多就是动态规划的本质。**

### 非递归代码(O(n))

为了去除重叠子问题，我们可以利用一个数组来保存值，即数组的第 n 位的值对应的是 Fib(n) 的值。但由于 Fibonacci 数列是从第一个数开始，而非第 0 个数，因此这里的 n >= 1.

接下来和上面一样，可以写出递推公式：

``` java
arr[i] = arr[i - 1] + arr[i - 2]
```

初始化数组：

``` java
arr[0] = 0;
arr[1] = 1;
```

通过遍历 n，将值存入数组后，最终的结果为 `arr[n]`。

代码：

``` java
public int fibnacci(int n) {
  if (n <= 1) {
    return n;
  }
  int[] arr = new int[n + 1];
  arr[0] = 0; arr[1] = 1;

  for (int i = 2; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr[n];
}
```